import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Allgames from "../Pages/Allgames";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Game from "../Pages/Game";
import Register from "../Pages/Register";
import PrivetRoutes from "./PrivetRoutes/PrivetRoutes";



const myCreatedRoute =  createBrowserRouter([
    {

        path : "/",
        element : <MainLayout></MainLayout>,
       
        children : [
            {
                path : "/",
                element: <Home></Home>,
                loader : ()=> fetch('/games.json')
            },
            {
                path : "/Allgames",
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
                path: 'register',
                element: <Register />
              },
           
        ]

    }
])

export default myCreatedRoute;