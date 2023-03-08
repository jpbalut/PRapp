import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage, RegisterPage } from "../pages"

export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path = "PRapp/login" element={ <LoginPage/>}  />
        <Route path = "PRapp/register" element={ <RegisterPage/>}  />

        <Route path = "/PRapp/*" element={ <Navigate to = "/PRapp/auth/login" />}  />
    </Routes>
  )
}
