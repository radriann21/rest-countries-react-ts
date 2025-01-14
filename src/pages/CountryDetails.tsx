import { useParams, Link } from "react-router"
import { Main } from "../layouts/Main"
import { Header } from "../components/Header"
import { Back } from "../components/icons/Back"

export const CountryDetails = () => {
  const { countryCode } = useParams()

  return (
    <Main>
      <Header />
      <section className="max-w-full p-12">
        <Link to="/">
          <button className="btn bg-white shadow-md border-none text-light-very-dark-blue dark:text-white dark:bg-dark-dark-blue font-customLight px-8 hover:scale-90 hover:bg-white dark:hover:bg-dark-dark-blue outline-none">
            <Back />
            Back
          </button>
        </Link>
      </section>
    </Main>
  )
}