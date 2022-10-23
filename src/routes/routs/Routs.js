import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../pages/category/category/Category";
import Home from "../../pages/home/Home";
import News from "../../pages/news/news/News";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/category/:id',
                element: <Category />
            },
            {
                path: '/news/:id',
                element: <News />
            }
        ]

    }
])
export default router;  