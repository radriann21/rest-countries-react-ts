import { Main } from "../layouts/Main"
import { Header } from "../components/Header"
import { InputsContainer } from "../components/InputsContainer"

export const Home = () => {
  return (
    <Main>
      <Header />
      <section className="max-w-full p-12 flex flex-col">
        <InputsContainer />
      </section>
    </Main>
  )
}