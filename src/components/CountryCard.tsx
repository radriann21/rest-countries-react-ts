import type { CountryMain } from "../types"

type CountryCardProps = {
  country: CountryMain
}

export const CountryCard = ({ country }: CountryCardProps) => {
  return (
    <article className="rounded-md shadow-md w-full flex flex-col bg-white font-customLight text-light-very-dark-blue">
      <div className="w-full h-[180px]">
        <img className="rounded-t-md w-full h-full" src={country.flags.png} alt={country.name.common} />
      </div>
      <div className="p-6">
        <h3 className="text-black font-customBold text-xl">{country.name.common}</h3>
        <div className="mt-4">
          <p>
            <span className="font-customSemiBold">Population: </span>
            {country.population.toLocaleString()}
          </p>
          <p>
            <span className="font-customSemiBold">Region: </span>
            {country.region}
          </p>
          <p>
            <span className="font-customSemiBold">Capital: </span>
            {country.capital}
          </p>
        </div>
      </div>
    </article>
  )
}