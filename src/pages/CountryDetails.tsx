import { useParams, Link } from "react-router"
import { Main } from "../layouts/Main"
import { Header } from "../components/Header"
import { Back } from "../components/icons/Back"
import { RootState, AppDispatch } from "../app/store"
import { useDispatch, useSelector } from "react-redux"
import { fetchCountry } from "../app/CountriesSlice"
import { useEffect } from "react"
import { CountryDetailsComponent } from "../components/CountryDetailsComponent"

export const CountryDetails = () => {
  const country = useSelector((state: RootState) => state.country)
  const { countryCode } = useParams()
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    if (countryCode) {
      dispatch(fetchCountry(countryCode))
    }
  }, [dispatch, countryCode])

  return (
    <Main>
      <Header />
      <section className="max-w-full p-4 md:p-12">
        <Link to="/">
          <button className="btn bg-white shadow-md border-none text-light-very-dark-blue dark:text-white dark:bg-dark-dark-blue font-customLight px-8 hover:scale-90 hover:bg-white dark:hover:bg-dark-dark-blue outline-none">
            <Back />
            Back
          </button>
        </Link>
        {country && <CountryDetailsComponent country={country} />}
      </section>
    </Main>
  )
}