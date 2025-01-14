import type { CountryDetail, customError } from "../types/types";

export const getCountry = async (countryCode: string | undefined): Promise<CountryDetail | customError> => {
  const URL = `https://restcountries.com/v3.1/alpha/${countryCode}`;
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      return {
        error: response.statusText
      };
    }
    const data = await response.json();
    if (!Array.isArray(data)) {
      return {
        error: "Invalid response format"
      };
    }
    const { name, tld, population, flags, currencies, capital, region, subregion, languages, borders, cca3 } = data[0];
    return {
      name,
      tld,
      population,
      flags,
      currencies,
      capital,
      region,
      subregion,
      languages,
      borders,
      cca3
    };
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        error: err.message
      };
    }
    return {
      error: 'Unexpected error'
    };
  }
};