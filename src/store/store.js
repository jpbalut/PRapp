import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { workoutSlice } from './workout/workoutSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    workout: workoutSlice.reducer,
  },
})