import type { CountryMain } from "../types/types"
import { CountryCard } from "./CountryCard"

type ListOfCountriesProps = {
  countries: CountryMain[]
}

export const ListOfCountries = ({ countries }: ListOfCountriesProps) => {
  return (
    <>
      {countries.map((country) => (
        <CountryCard key={country.cca3} country={country} />
      ))}
    </>
  )
}