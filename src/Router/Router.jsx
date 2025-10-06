import React from 'react'
import {
  createBrowserRouter,
} from "react-router";
import RootLayout from '../Layouts/RootLayout';
import Home from '../Pages/Home/Home';
import Register from '../Pages/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, 
    children:[
        {
            index:true,
            element:<Home /> 
        },
        {
            path:'/register',
            element:<Register/>
        }
    ]
  },
]);

export default router