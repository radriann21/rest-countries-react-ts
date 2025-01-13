import { useEffect } from "react"
import { RootState, AppDispatch } from "../app/store"
import { useSelector, useDispatch } from "react-redux"
import { fetchCountries } from "../app/CountriesSlice"
import { ListOfCountries } from "./ListOfCountries"

export const DisplayCountries = () => {
  const countries = useSelector((state: RootState) => state.countries)
  const loading = useSelector((state: RootState) => state.loading)
  const error = useSelector((state: RootState) => state.error)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchCountries())
  }, [dispatch])

  return (
    <section className="mt-8 max-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 relative">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-customBold text-sm text-red-600">Error in loading</span>
        </div>
      )}
      {
        countries
          ? (<ListOfCountries countries={countries} />)
          : null
      }
    </section>
  )
}