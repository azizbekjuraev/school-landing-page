import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reducers/authSlice'
import kanbanReducer from './reducers/kanbanSlice'
import chatReducer from './reducers/chatSlice'
import calendarReducer from './reducers/calendarSlice'
import { api } from './services/api.js'
import { useDispatch } from 'react-redux'
import layoutReducer from './layout'

export const store = configureStore({
  reducer: {
    layout: layoutReducer,
    auth: authReducer,
    kanban: kanbanReducer,
    chat: chatReducer,
    calendar: calendarReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
