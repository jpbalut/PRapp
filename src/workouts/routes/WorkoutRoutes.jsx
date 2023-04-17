import { Navigate, Route, Routes } from "react-router-dom"
import { WorkoutsPage, CalculatePage, SumPlatesPage, WorkoutPage, SearchPage, CalculatePageKg } from "../pages"


export const WorkoutRoutes = () => {
  return (

    <Routes>
         <Route path="rms" element={<WorkoutsPage/>} />
        {/* <Route path="weighlifting" element={ <WeightLiftingPage/> }/> */}
        {/* <Route path="search" element={<SearchPage/>} /> */}
        <Route path="calculate" element={<CalculatePage/>} />
        <Route path="calculatekg" element={<CalculatePageKg/>} />
        {/* <Route path="platesbyside" element={<PlatesBySidePage/>} /> */}
        <Route path="workout/:id" element={ <WorkoutPage/> }/>
        <Route path="/sumplates" element={ <SumPlatesPage /> }/>
        <Route path="/*" element={ <Navigate to="/rms" /> }/>

        <Route path="/" element={ <Navigate to="/rms" /> }/>
        
        

    </Routes>
  )
}
