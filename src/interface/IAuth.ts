export interface IUser {
  id: number
  name: string
  email: string
  role: string
}

export interface DecodedToken {
  exp: number
}

export interface IRefreshPayload {
  token: {
    access: string
  }
}

export interface AuthState {
  token: string | null
  refreshToken: string | null
  expirationTime: number
  error: string | null
  user: IUser | null
  loading: boolean
}

export interface ILoginPayload {
  data: {
    tokens: {
      access: string
      refresh: string
    }
    user: IUser
  }
}
