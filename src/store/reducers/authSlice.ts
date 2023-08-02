import { createSelector, createSlice, PayloadAction, AnyAction } from '@reduxjs/toolkit'
import jwtDecode from 'jwt-decode'
import { IUser } from '@/interface/IAuth'
import { authApi } from '../services/authApi'
import { AuthState, DecodedToken, ILoginPayload, IRefreshPayload } from '@/interface/IAuth'
import Cookies from 'js-cookie'

const initialState: AuthState = {
  token: null,
  refreshToken: null,
  expirationTime: 0,
  error: null,
  user: null,
  loading: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      state.token = null
      state.refreshToken = null
      state.expirationTime = 0
      state.user = null
      Cookies.remove('token')
      Cookies.remove('refreshToken')
      Cookies.remove('userData')
    },
    setUser: (state, action: PayloadAction<IUser | null>) => {
      state.user = action.payload
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    }
  },
  extraReducers: builder => {
    builder
      .addMatcher(authApi.endpoints.login.matchPending, state => {
        state.loading = true
        state.error = null
      })
      .addMatcher(authApi.endpoints.login.matchFulfilled, (state, action: PayloadAction<ILoginPayload>) => {
        const { data } = action.payload
        const token = data.tokens
        const user = { ...data.user, tokens: null }
        const { exp } = jwtDecode<DecodedToken>(token.access)

        state.token = token.access
        state.refreshToken = token.refresh
        state.expirationTime = exp * 1000
        state.user = user
        state.loading = false

        Cookies.set('token', token.access)
        Cookies.set('refreshToken', token.refresh)
        Cookies.set('userData', JSON.stringify(user))
      })
      .addMatcher(authApi.endpoints.login.matchRejected, (state, action: AnyAction) => {
        state.error = action.error.message
        state.loading = false
      })
      .addMatcher(authApi.endpoints.refresh.matchPending, state => {
        state.loading = true
      })
      .addMatcher(authApi.endpoints.refresh.matchFulfilled, (state, action: PayloadAction<IRefreshPayload>) => {
        const { token } = action.payload
        const { exp } = jwtDecode<DecodedToken>(token.access)

        state.token = token.access
        state.expirationTime = exp * 1000
        state.loading = false

        Cookies.set('token', token.access)
      })
      .addMatcher(authApi.endpoints.refresh.matchRejected, state => {
        state.token = null
        state.refreshToken = null
        state.expirationTime = 0
        state.loading = false
        Cookies.remove('token')
        Cookies.remove('refreshToken')
      })
  }
})

export const selectIsAuthenticated = createSelector(
  (state: { auth: AuthState }) => state.auth.token,
  token => token !== null
)

export const { logout, setUser, setLoading } = authSlice.actions

export default authSlice.reducer
