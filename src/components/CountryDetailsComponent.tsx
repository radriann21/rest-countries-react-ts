import type { CountryDetail } from "../types/types"
import { Link } from "react-router"
import countries from 'i18n-iso-countries'
import enLocale from 'i18n-iso-countries/langs/en.json'

type CountryDetailsComponentProps = {
  country: CountryDetail
}

export const CountryDetailsComponent = ({ country }: CountryDetailsComponentProps) => {
  countries.registerLocale(enLocale)

  const nativeNameKey = Object.keys(country.name.nativeName)
  const languages = Object.values(country.languages)
  const borders = country.borders !== undefined ? country.borders : []


  return (
    <section className="w-full mt-12 flex flex-col lg:flex-row justify-between lg:space-x-24">
      <div className="flex-1">
        <img className="w-full" src={country.flags.svg} alt={country.flags.alt} />
      </div>
      <div className="flex-1 py-10">
        <div>
          <h1 className="font-customBold text-2xl md:text-4xl text-light-very-dark-blue dark:text-white">
            {country.name.common}
          </h1>
          <div className="mt-8 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 items-start">
            <div className="space-y-2 text-sm">
              <p className="font-customLight text-light-very-dark-blue dark:text-dark-card-text-dark">
                <span className="font-customBold">Native Name: </span>
                {nativeNameKey.length > 0 ? country.name.nativeName[nativeNameKey[0]].official : 'N/A'}
              </p>
              <p className="font-customLight text-light-very-dark-blue dark:text-dark-card-text-dark">
                <span className="font-customBold">Population: </span>
                {country.population.toLocaleString()}
              </p>
              <p className="font-customLight text-light-very-dark-blue dark:text-dark-card-text-dark">
                <span className="font-customBold">Region: </span>
                {country.region}
              </p>
              <p className="font-customLight text-light-very-dark-blue dark:text-dark-card-text-dark">
                <span className="font-customBold">Subregion: </span>
                {country.subregion}
              </p>
            </div>
            <div className="space-y-2 text-sm">
              <p className="font-customLight text-light-very-dark-blue dark:text-dark-card-text-dark">
                <span className="font-customBold">Top Level Domain: </span>
                {country.tld.join(',')}
              </p>
              <p className="font-customLight text-light-very-dark-blue dark:text-dark-card-text-dark">
                <span className="font-customBold text-light-very-dark-blue dark:text-dark-card-text-dark">Currencies: </span>
                {Object.values(country.currencies).map((currency, index) => (
                  <span key={index}>
                    {currency.name}
                    {index < Object.values(country.currencies).length - 1 && ', '}
                  </span>
                ))}
              </p>
              <p className="font-customLight text-light-very-dark-blue dark:text-dark-card-text-dark">
                <span className="font-customBold text-light-very-dark-blue dark:text-dark-card-text-dark">Languages: </span>
                {
                  languages.map((lang, index) => (
                    <span key={index}>
                      {lang}
                      {index < Object.values(country.languages).length - 1 && ', '}
                    </span>
                  ))
                }
              </p>
            </div>
          </div>
          <div className="mt-8">
            <span className="text-sm font-customBold text-light-very-dark-blue dark:text-white">
              Border Countries:
            </span>
            {
              borders.length > 0
                ? (
                  borders.map((border, index) => (
                    <Link key={index} to={`/country/${border}`}>
                      <button className="text-sm mx-2 bg-white dark:bg-dark-dark-blue dark:text-white shadow-md  text-light-very-dark-blue font-customLight p-2 m-1">
                        {countries.getName(border, 'en')}
                      </button>
                    </Link>
                  ))
                )
                : (
                  <span className="font-customLight text-light-very-dark-blue dark:text-white">
                    No Borders
                  </span>
                )
            }
          </div>
        </div>
      </div>
    </section>
  )
}