import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import LoginPage from "../Pages/Login/Login";
import Register from "../Pages/register/register";
const Router = () => {
    const routes = useRoutes(
        [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <LoginPage />
            },
            {
                path: '/register',
                element: <Register />
            },
        ]
    )
    return routes
}
export default Router