import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './counterSlice'

export const store = configureStore({
  reducer: {rootReducer},
})

