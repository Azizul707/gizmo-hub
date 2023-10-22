import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Components/MainLayouts/MainLayouts";
import Home from "../Pages/Home";
import AddProduct from "../Pages/AddProduct";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ProductPage from "../Pages/ProductPage";
import PrivateRoute from "../Components/PrivateRoute";
import ProductDetails from "../Pages/ProductDetails";
import Update from "../Pages/Update";
import Cart from "../Pages/Cart";


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
            element:<PrivateRoute><AddProduct/></PrivateRoute>
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
        },
        {
            path: '/details/:id',
            loader:()=>fetch('http://localhost:5000/products/'),
            element:<PrivateRoute><ProductDetails/></PrivateRoute>
        },
        {
            path: '/update/:id',
            element:<PrivateRoute><Update/></PrivateRoute>
        },
        {
            path: '/cart/',
            loader:()=> fetch( 'http://localhost:5000/cart' ),
            element:<PrivateRoute><Cart/></PrivateRoute>
        }
    ]


} ] )
export default createRouter;