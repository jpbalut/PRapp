import { WorkoutList } from "../components"

export const GymnasticPage = () => {
  return (
    <>
      <h1 className='mt-4'>Ejercicios Gimnásticos</h1>
      <hr />

      <WorkoutList type = 'Gymnastic'/>
    </>
  )
}
