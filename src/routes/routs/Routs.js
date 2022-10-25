import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../pages/category/category/Category";
import Home from "../../pages/home/Home";
import Login from "../../shered/login/Login";
import Register from "../../shered/register/Register";
import NewsDetails from "../../shered/rightNav/newsDetails/NewsDetails";
import PrivateRoute from "./private/PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                loader: () => fetch('https://modiul-60-server.vercel.app/news'),
                element: <Home />
            },
            {
                path: '/category/:id',
                loader: ({ params }) => fetch(`https://modiul-60-server.vercel.app/category/${params.id}`),
                element: <Category />
            },
            {
                path: '/news/:newsid',
                element: <NewsDetails />,
                loader: ({ params }) => fetch(`https://modiul-60-server.vercel.app/news/${params.newsid}`)
            },
            {
                path: '/login',
                element: <PrivateRoute><Login /></PrivateRoute>
            },
            {
                path: '/register',
                element: <Register />
            }
        ]

    }
])
export default router;  