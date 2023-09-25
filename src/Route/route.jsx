import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../layout/Main";
import HomePage from "../pages/Home/HomePage/HomePage";
import CarPage from "../pages/CarPage/CarPage";


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
            }
        ]
    },
]);