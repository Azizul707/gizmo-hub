import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Components/MainLayouts/MainLayouts";
import Home from "../Pages/Home";
import AddProduct from "../Pages/AddProduct";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ProductPage from "../Pages/ProductPage";


const createRouter = createBrowserRouter( [ {
    path: '/',
    element: <MainLayouts />,
    children: [
        {
            path: '/',
            element: <Home />,
            loader: () => fetch( '/brands.json' ),
        },
        {
            path: '/add-product',
            element:<AddProduct/>
        },
        {
            path: '/login',
            element:<Login/>
        },
        {
            path: '/register',
            element:<Register/>
        },
        {
            path: '/products/:product',
            element: <ProductPage />,
            
        }
    ]


} ] )
export default createRouter;