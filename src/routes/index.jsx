import { Route, Routes } from "react-router-dom"
import { NotFoundPage } from "../pages/notFoundPage"
import { DashboardPage } from "../pages/dashboardPage"
import { LoginPage } from "../pages/loginPage"
import { RegisterPage } from "../pages/registerPage"

export const RoutesPages = () => {

    return(
        
        <Routes>
            <Route path="/" element={ <DashboardPage />} />
            <Route path="/login" element={ <LoginPage />} />
            <Route path="/register" element={ <RegisterPage />} />
            <Route path="*" element={ <NotFoundPage />} />
        </Routes>

    )
}