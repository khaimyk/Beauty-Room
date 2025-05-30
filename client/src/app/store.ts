import { configureStore } from "@reduxjs/toolkit"
import type { ThunkAction, Action } from "@reduxjs/toolkit"
import { api } from "./services/api"
import auth from "../features/useSlice"
import { listenerMiddleware } from "../middleware/auth"
import branchReducer from "../features/branchSlice"

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth,
    branch: branchReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(api.middleware)
      .prepend(listenerMiddleware.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
