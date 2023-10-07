import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../layout/Main";
import HomePage from "../pages/Home/HomePage/HomePage";
import CarPage from "../pages/CarPage/CarPage";
import Pricing from "../pages/Pricing/Pricing";
import AboutUs from "../pages/AboutUs/AboutUs";
import Blog from "../pages/Blog/Blog";
import ConatctUs from "../pages/Contact Us/ContactUs";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>,
            },
            {
                path: '/car/:id',
                element: <CarPage></CarPage>,
                loader: ({params}) => fetch(`http://localhost:3000/car/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/contact-us',
                element: <ConatctUs></ConatctUs>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: "/aboutUs",
                element: <AboutUs></AboutUs>
            },
            {
                path: "/pricing",
                element: <Pricing></Pricing>
            }
        ]
    },
]);