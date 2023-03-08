import { Navigate, Route, Routes } from "react-router-dom"
import { WorkoutsPage, CalculatePage, SumPlatesPage, WorkoutPage } from "../pages"


export const WorkoutRoutes = () => {
  return (

    <Routes>
        <Route path="rms" element={<WorkoutsPage/>} />
        {/* <Route path="weighlifting" element={ <WeightLiftingPage/> }/> */}
        {/* <Route path="search" element={<SearchPage/>} /> */}
        <Route path="calculate" element={<CalculatePage/>} />
        {/* <Route path="platesbyside" element={<PlatesBySidePage/>} /> */}
        <Route path="workout/:id" element={ <WorkoutPage/> }/>
        <Route path="/sumplates" element={ <SumPlatesPage /> }/>
        <Route path="/*" element={ <Navigate to="/calculate" /> }/>

        <Route path="/" element={ <Navigate to="/calculate" /> }/>
        
        

    </Routes>
  )
}
