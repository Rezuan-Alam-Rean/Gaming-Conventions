import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Allgames from "../Pages/Allgames";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Game from "../Pages/Game";
import Register from "../Pages/Register";
import PrivetRoutes from "./PrivetRoutes/PrivetRoutes";
import ErrorPage from "../Pages/ErrorPage";
import About from "../Pages/Proute/About";
import Complain from "../Pages/Proute/Complain";



const myCreatedRoute =  createBrowserRouter([
    {

        path : "/",
        element : <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,

       
        children : [
            {
                path : "/",
                element: <Home></Home>,
                loader : ()=> fetch('/games.json')
            },
            {
                path : "/Logout",
                element : <Allgames></Allgames>,
               
            },
            {
                path : "/Game/:id",
                element :<PrivetRoutes> <Game></Game></PrivetRoutes>,
                loader:()=>fetch('/games.json')
            },


            {
                path : "/login",
                element : <Login></Login>
            },

            {
                path: '/register',
                element: <Register></Register>
              },
           
            {
                path: '/About',
                element: <About></About>
              },
           
            {
                path: '/Upcomming',
                element: <Complain></Complain>
              },
           
        ]

    }
])

export default myCreatedRoute;