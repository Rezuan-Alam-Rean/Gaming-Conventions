import React from 'react'
import ReactDOM from 'react-dom/client'
import toast, { Toaster } from 'react-hot-toast';

import './index.css'
import { RouterProvider } from 'react-router-dom'
import myCreatedRoute from './Router/Route.jsx'
import AuthProvider from './Provider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
          <Toaster/>

     <AuthProvider>

     <RouterProvider router={myCreatedRoute}></RouterProvider>
     </AuthProvider>
  </React.StrictMode>,
)
