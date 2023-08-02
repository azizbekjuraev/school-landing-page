import {
  createApi,
  fetchBaseQuery,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta
} from '@reduxjs/toolkit/query/react'
import { RetryOptions } from '@reduxjs/toolkit/dist/query/retry'
import { authApi } from '@/store/services/authApi'
import Cookies from 'js-cookie'

type FetchBaseQueryFn = BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError,
  {} & RetryOptions,
  FetchBaseQueryMeta
>

const BASE_URL = import.meta.env.VITE_SERVER_ENDPOINT as string

const baseQuery: FetchBaseQueryFn = async (args, api, extraOptions) => {
  const result = await fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: headers => {
      const token = Cookies.get('token')
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    }
  })(args, api, extraOptions)

  if (result.error && result.error.status === 401) {
    // @ts-ignore
    const refreshResult = await api.dispatch(authApi.endpoints.refresh.initiate())
    // @ts-ignore
    if (refreshResult.data) {
      const retryResult = await fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders: headers => {
          const refreshedToken = Cookies.get('token')
          if (refreshedToken) {
            headers.set('Authorization', `Bearer ${refreshedToken}`)
          }
          return headers
        }
      })(args, api, extraOptions)
      return retryResult
    } else {
      Cookies.remove('token')
      Cookies.remove('refreshToken')
      // store.dispatch(logout())
      return result
    }
  }
  return result
}

export const unauthenticatedBaseQuery: FetchBaseQueryFn = fetchBaseQuery({
  baseUrl: BASE_URL
})

export const api = createApi({
  reducerPath: 'api',
  baseQuery,
  endpoints: () => ({})
})
