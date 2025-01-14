export type CountryMain = {
  name: {
    common: string
  },
  capital: string[],
  region: string,
  population: number,
  flags: {
    png: string,
    svg: string
  }
}

export type CountryDetail = {
  name: {
    common: string,
    nativeName: {
      lang: {
        official: string
      }
    }
  },
  tld: string[],
  population: number,
  flags: {
    png: string,
    svg: string,
    alt?: string
  },
  currencies: {
    [key: string]: { name: string; symbol: string }
  };
  capital: string[],
  region: string,
  subregion: string,
  languages: {
    [key: string]: string
  };
}

export type initialStateType = {
  countries: CountryMain[],
  filteredCountries: CountryMain[],
  loading: boolean,
  error: string | null,
  country: CountryDetail | null
}

export type customError = {
  error: string
}