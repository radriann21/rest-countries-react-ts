import { ToogleMode } from "./ToogleMode"

export const Header = () => {
  return (
    <header className="navbar bg-white dark:bg-dark-dark-blue shadow-md px-4 sm:px-12 py-4 flex items-center justify-between">
      <div>
        <h1 className="font-customBold text-sm sm:text-2xl text-light-very-dark-blue dark:text-white">Where in the world?</h1>
      </div>
      <div className="flex-none text-light-very-dark-blue dark:text-white">
        <ToogleMode />
      </div>
    </header>
  )
}