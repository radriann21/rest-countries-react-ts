export const InputRegion = () => {
  return (
    <div className="w-fit lg:w-[20%]">
      <select className="select w-full max-w-xs bg-white shadow-md dark:bg-dark-dark-blue text-light-very-dark-blue dark:text-white">
        <option disabled selected>Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  )
}