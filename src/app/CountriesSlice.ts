import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { CountryMain, initialStateType } from "../types";
import { getAllCountries } from "../services/getAllCountries";

const initialState: initialStateType | null = {
  countries: [],
  loading: false,
  error: null
}

export const fetchCountries = createAsyncThunk(
  'countries/fetchAllCountries',
  async () => {
    const response = await getAllCountries()
    if ('error' in response) {
      throw new Error(response.error)
    }
    console.log(response)
    return response
  }
)

export const CountriesSlice = createSlice({
  name: 'countries',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.pending, (state) => {
      state.error = null
      state.loading = true
    })
    builder.addCase(fetchCountries.fulfilled, (state, action: PayloadAction<CountryMain[]>) => {
      state.loading = false
      state.countries = action.payload
    })
    builder.addCase(fetchCountries.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message || 'Error'
    })
  },
  reducers: {

  }
})

export default CountriesSlice.reducer