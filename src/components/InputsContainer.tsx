import { InputName } from "./InputName"
import { InputRegion } from "./InputRegion"

export const InputsContainer = () => {
  return (
    <section className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:spae-y-0">
      <InputName />
      <InputRegion />
    </section>
  )
}