import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { CountryMain, initialStateType, CountryDetail } from "../types/types";
import { getAllCountries } from "../services/getAllCountries";
import { getCountry } from "../services/getCountry";

const initialState: initialStateType | null = {
  countries: [],
  filteredCountries: [],
  country: null,
  loading: false,
  error: null,
}

export const fetchCountries = createAsyncThunk(
  'countries/fetchAllCountries',
  async () => {
    const response = await getAllCountries()
    if ('error' in response) {
      throw new Error(response.error)
    }
    return response
  }
)

export const fetchCountry = createAsyncThunk(
  'country/fetchCountry',
  async (country: string) => {
    const response = await getCountry(country)
    if ('error' in response) {
      throw new Error(response.error)
    }
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
      state.filteredCountries = action.payload
    })
    builder.addCase(fetchCountries.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message || 'Error'
    })
    builder.addCase(fetchCountry.pending, (state) => {
      state.error = null
      state.loading = true
    })
    builder.addCase(fetchCountry.fulfilled, (state, action: PayloadAction<CountryDetail>) => {
      state.loading = false
      state.error = null
      state.country = action.payload
    })
    builder.addCase(fetchCountry.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message || 'Error'
    })
  },
  reducers: {
    filterByName: (state, action: PayloadAction<string>) => {
      state.filteredCountries = state.countries.filter((country) =>
        country.name.common.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    filterByRegion: (state, action: PayloadAction<string>) => {
      state.filteredCountries = state.countries.filter((country) =>
        country.region.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  }
})

export const { filterByName, filterByRegion } = CountriesSlice.actions
export default CountriesSlice.reducer

