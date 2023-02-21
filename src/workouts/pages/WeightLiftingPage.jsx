import { WorkoutList } from "../components"

export const WeightLiftingPage = () => {
  return (
    <>
      <h1 className='mt-4'>Ejercicios de Levantamiento</h1>
      <hr />

      <WorkoutList type = 'Weightlifting'/>
    </>
  )
}
