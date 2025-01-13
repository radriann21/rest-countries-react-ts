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

export type initialStateType = {
  countries: CountryMain[],
  loading: boolean,
  error: string | null
}

export type customError = {
  error: string
}