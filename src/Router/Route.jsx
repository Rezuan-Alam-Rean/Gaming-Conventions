import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Allgames from "../Pages/Allgames";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Details from "../Pages/Details";


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
                path : "/Details/:id",
                element : <Details></Details>,
                // loader:()=>fetch('/phones.json')
            },


            {
                path : "/login",
                element : <Login></Login>
            },
           
        ]

    }
])

export default myCreatedRoute;