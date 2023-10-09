import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Membership from "../pages/Membership/Membership";
import Orders from "../pages/Orders/Orders";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            path:"/",
            element:<Home></Home>,
            loader: ()=> fetch('/events.json')
        },
        {
            path:"/aboutUs",
            element:<AboutUs></AboutUs>,
            loader:()=> fetch('/team.json')
        },
        {
            path:"/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
            path: "/membership",
            element: <PrivateRoute><Membership></Membership></PrivateRoute>
        },
        {
            path: "/orders",
            element: <PrivateRoute><Orders></Orders></PrivateRoute>
        },
        {
            path: "/services/:id",
            element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
            loader: ()=> fetch('/events.json')
        }
        
    ]
  },
]);


export default routes;