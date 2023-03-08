import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { useCheckAuth } from "../hooks"
import { CheckingAuth } from "../ui"
import { WorkoutRoutes } from "../workouts"

export const AppRouter = () => {
  const {status} = useCheckAuth()
  if (status === 'checking'){
    return <CheckingAuth />
  }
  return (
    <>
        <Routes>
        {
        (status === 'authenticated' )
        ? <Route path="/*" element = {<WorkoutRoutes/> } />
        :<Route path="/auth/*" element = {<AuthRoutes/> } />
        }
        <Route path='/*' element = { <Navigate to='/auth/login'/>} />
    </Routes>
    </>
  )
}
