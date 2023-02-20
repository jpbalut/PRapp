import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth"
import { WorkoutRoutes } from "../workouts"

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="login" element={ <LoginPage /> }/>
            <Route path="/*" element={ <WorkoutRoutes /> }/>
        </Routes>
    </>
  )
}
