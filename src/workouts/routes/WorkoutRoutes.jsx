import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "../../ui"
import { CalculatePage, GymnasticPage, SearchPage, WeightLiftingPage, PlatesBySidePage, SumPlatesPage } from "../pages"
import { WorkoutPage } from "../pages/WorkoutPage"

export const WorkoutRoutes = () => {
  return (
    <>
            <div className="container">
                <Routes>
                    <Route path="gymnastic" element={<GymnasticPage/>} />
                    <Route path="weighlifting" element={ <WeightLiftingPage/> }/>
                    <Route path="search" element={<SearchPage/>} />
                    <Route path="calculate" element={<CalculatePage/>} />
                    <Route path="platesbyside" element={<PlatesBySidePage/>} />
                    <Route path="workout/:id" element={ <WorkoutPage/> }/>
                    <Route path="/sumplates" element={ <SumPlatesPage /> }/>
                    <Route path="/PRapp" element={ <Navigate to="/calculate" /> }/>

                    <Route path="/" element={ <Navigate to="/calculate" /> }/>
                    
                    

                </Routes>
            </div>
    </>
  )
}
