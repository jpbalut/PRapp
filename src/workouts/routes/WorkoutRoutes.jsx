import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { CalculatePage, GymnasticPage, SearchPage, WeightLiftingPage } from "../pages"
import { WorkoutPage } from "../pages/WorkoutPage"

export const WorkoutRoutes = () => {
  return (
    <>
        <Navbar />
            <div className="container">
                <Routes>
                    <Route path="gymnastic" element={<GymnasticPage/>} />
                    <Route path="weighlifting" element={ <WeightLiftingPage/> }/>

                    <Route path="search" element={<SearchPage/>} />
                    <Route path="calculate" element={<CalculatePage/>} />
                    <Route path="workout/:id" element={ <WorkoutPage/> }/>

                    <Route path="/" element={ <Navigate to="/gymnastic" /> }/>

                </Routes>
            </div>
    </>
  )
}
