import { useDispatch } from "react-redux"
import { filterByRegion } from "../app/CountriesSlice"

export const InputRegion = () => {
  const dispatch = useDispatch()

  const handleChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = evt.currentTarget
    dispatch(filterByRegion(value))
  }

  return (
    <div className="w-fit lg:w-[20%]">
      <select onChange={handleChange} className="select w-full max-w-xs bg-white shadow-md dark:bg-dark-dark-blue text-light-very-dark-blue dark:text-white">
        <option disabled defaultValue="">Filter by Region</option>
        <option value="">All</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  )
}