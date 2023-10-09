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
            element:<AboutUs></AboutUs>
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
            element: <Membership></Membership>
        },
        {
            path: "/orders",
            element: <Orders></Orders>
        },
        {
            path: "/services/:id",
            element:<ServiceDetails></ServiceDetails>,
            loader: ()=> fetch('/events.json')
        }
        
    ]
  },
]);


export default routes;