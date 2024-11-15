import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import CreateAccount from "../pages/CreateAccount";
import Dashboard from "../layouts/Dashboard";
import PrivateRoute from "./private/PrivateRoute";
import Overview from "../pages/Dashboard/Overview";
import AddProducts from "../pages/Dashboard/Seller/AddProducts";
import MyProducts from "../pages/Dashboard/Seller/MyProducts";
import SellerRoute from "./private/SellerRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/products',
                element: <Products></Products>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact-us',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/create-account',
                element: <CreateAccount></CreateAccount>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                index: true,
                element: <Overview></Overview>
            },
            // for seller only
            {
                path: 'add-products',
                element: <SellerRoute><AddProducts></AddProducts></SellerRoute>
            },
            {
                path: 'my-products',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>

            },
        ],
    }
]);
export default router;