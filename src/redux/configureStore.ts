import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import categories from "./reducers/categories";
import sprintIntervals from "./reducers/sprintIntervals";


export const store = configureStore({
  reducer: {
    categories: categories,
    sprintIntervals: sprintIntervals
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
