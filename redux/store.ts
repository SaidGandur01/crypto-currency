'use client'

import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query"

import reducers from "./reducers";
import middleware from "./middleware";

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware):any => getDefaultMiddleware().concat(middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;