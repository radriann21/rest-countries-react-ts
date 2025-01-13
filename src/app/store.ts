import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "./CountriesSlice";

export const countriesStore = configureStore({
  reducer: countriesReducer
})

export type RootState = ReturnType<typeof countriesStore.getState>
export type AppDispatch = typeof countriesStore.dispatch