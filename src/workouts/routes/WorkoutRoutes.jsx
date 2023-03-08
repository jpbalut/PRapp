import { Navigate, Route, Routes } from "react-router-dom"
import { WorkoutsPage, CalculatePage, SumPlatesPage, WorkoutPage } from "../pages"


export const WorkoutRoutes = () => {
  return (

    <Routes>
        <Route path="PRapp/rms" element={<WorkoutsPage/>} />
        {/* <Route path="weighlifting" element={ <WeightLiftingPage/> }/> */}
        {/* <Route path="search" element={<SearchPage/>} /> */}
        <Route path="PRapp/calculate" element={<CalculatePage/>} />
        {/* <Route path="platesbyside" element={<PlatesBySidePage/>} /> */}
        {/* <Route path="workout/:id" element={ <WorkoutPage/> }/> */}
        <Route path="PRapp/sumplates" element={ <SumPlatesPage /> }/>
        <Route path="PRapp/*" element={ <Navigate to="/PRapp/calculate" /> }/>

        <Route path="PRapp/" element={ <Navigate to="/PRapp/calculate" /> }/>
        
        

    </Routes>
  )
}
