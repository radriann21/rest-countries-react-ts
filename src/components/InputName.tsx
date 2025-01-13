import { Search } from "./icons/Search"

export const InputName = () => {
  return (
    <div className="w-fit lg:w-[30%]">
      <label className="input input-bordered flex items-center bg-white dark:bg-dark-dark-blue gap-2 shadow-md">
        <Search />
        <input type="text" className="text-sm dark:placeholder:text-light-dark-gray placeholder:text-light-dark-gray bg-white text-light-very-dark-blue dark:text-light-very-light-gray input-lg" placeholder="Search for a country..." />
      </label>
    </div>
  )
}