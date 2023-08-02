import { api, unauthenticatedBaseQuery } from './api'
import Cookies from 'js-cookie'

export const authApi = api.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: credentials => ({
        url: '/sign-in',
        method: 'POST',
        body: credentials,
        baseQuery: unauthenticatedBaseQuery
      })
    }),
    refresh: builder.mutation({
      query: () => ({
        url: '/token/refresh',
        method: 'POST',
        body: {
          refresh: Cookies.get('refresh_token')
        }
      })
    }),
    register: builder.mutation({
      query: newUserDetails => ({
        url: '/sign-up',
        method: 'POST',
        body: newUserDetails,
        baseQuery: unauthenticatedBaseQuery
      })
    }),
    getProfile: builder.query({
      query: () => 'profile/'
    })
  })
})

export const { useLoginMutation, useRefreshMutation, useRegisterMutation, useGetProfileQuery } = authApi
