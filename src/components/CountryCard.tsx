import type { CountryMain } from "../types/types"
import { Link } from "react-router"

type CountryCardProps = {
  country: CountryMain
}

export const CountryCard = ({ country }: CountryCardProps) => {
  return (
    <Link to={`/country/${country.cca3.toLowerCase()}`}>
      <article className="rounded-md shadow-md w-full flex flex-col bg-white font-customLight text-light-very-dark-blue dark:bg-dark-dark-blue cursor-pointer transition-all transition-300 hover:scale-105 hover:shadow-lg">
        <div className="w-full h-[180px]">
          <img className="rounded-t-md w-full h-full" src={country.flags.png} alt={country.name.common} />
        </div>
        <div className="p-6">

          <h3 className="text-black font-customBold text-xl dark:text-white">
            {country.name.common}
          </h3>

          <div className="mt-4">
            <p className="dark:text-dark-card-text-dark">
              <span className="font-customSemiBold dark:text-white">Population: </span>
              {country.population.toLocaleString()}
            </p>
            <p className="dark:text-dark-card-text-dark">
              <span className="font-customSemiBold dark:text-white">Region: </span>
              {country.region}
            </p>
            <p className="dark:text-dark-card-text-dark">
              <span className="font-customSemiBold dark:text-white">Capital: </span>
              {country.capital}
            </p>
          </div>
        </div>
      </article>
    </Link>
  )
}