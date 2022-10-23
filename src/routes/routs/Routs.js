import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../pages/category/category/Category";
import Home from "../../pages/home/Home";
import NewsDetails from "../../shered/rightNav/newsDetails/NewsDetails";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                loader: () => fetch('http://localhost:5000/news'),
                element: <Home />
            },
            {
                path: '/category/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
                element: <Category />
            },
            {
                path: '/news/:newsid',
                element: <NewsDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.newsid}`)
            }
        ]

    }
])
export default router;  