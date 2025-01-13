import type { CountryMain } from "../types"
import { CountryCard } from "./CountryCard"

type ListOfCountriesProps = {
  countries: CountryMain[]
}

export const ListOfCountries = ({ countries }: ListOfCountriesProps) => {
  return (
    <>
      {countries.map((country) => (
        <CountryCard key={crypto.randomUUID()} country={country} />
      ))}
    </>
  )
}