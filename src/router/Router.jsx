import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../home/Home";
import About from "../about/About";
import Contact from "../contact/Contact";
import ErrorPage from "../errorPage/ErrorPage";
import Login from "../login/Login";
import Register from "../register/Register";
import Dashboard from "../dashboard/Dashboard";
import PrivateRoute from "../privateRoute/PrivateRoute";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/dashboard',
                element: <PrivateRoute> <Dashboard></Dashboard> </PrivateRoute>
            }
        ]
    },
]);

export default router;


