import type { CountryMain, customError } from "../types"


export const getAllCountries = async (): Promise<CountryMain[] | customError> => {
  const URL = 'https://restcountries.com/v3.1/all'
  try {
    const res = await fetch(URL)
    if (!res.ok) {
      return {
        error: res.statusText
      }
    }
    const data = await res.json()
    if (!Array.isArray(data)) {
      return {
        error: "It's not an array"
      }
    }

    const countries: CountryMain[] = data.map((country) => {
      const { name, capital, region, population, flags } = country
      return { name, capital, region, population, flags }
    })

    return countries

  } catch (err) {
    if (err instanceof Error) {
      return {
        error: err.message
      }
    } else {
      return { error: 'unexpected error' }
    }
  }
}