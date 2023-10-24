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
            element: <PrivateRoute><AddProduct /></PrivateRoute>
        },
        {
            path: '/login',
            element: <Login />,
            loader: () => fetch( 'https://gizmo-hub-server-dah6y3v2e-theappboundmarketing-gmailcom.vercel.app/products' ),
        },
        {
            path: '/register',
            element: <Register />
        },
        {
            path: '/products/:product',
            element: <ProductPage />,
        },
        {
            path: '/details/:id',
            loader: () => fetch( 'https://gizmo-hub-server-dah6y3v2e-theappboundmarketing-gmailcom.vercel.app/products/' ),
            element: <PrivateRoute><ProductDetails /></PrivateRoute>
        },
        {
            path: '/update/:id',
            loader: ( { params } ) => fetch( `https://gizmo-hub-server-dah6y3v2e-theappboundmarketing-gmailcom.vercel.app/updateProduct/${ params.id }` ),
            element: <PrivateRoute><Update /></PrivateRoute>
        },
        {
            path: '/cart/',
            loader: () => fetch( 'https://gizmo-hub-server-dah6y3v2e-theappboundmarketing-gmailcom.vercel.app/cart' ),
            element: <PrivateRoute><Cart /></PrivateRoute>
        }
    ]


} ] )
export default createRouter;