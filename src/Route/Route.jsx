import {
    createBrowserRouter,
    RouterProvider,
    } from "react-router";
import Root from "../Root/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Favorite from "../Pages/Favorite";
import About from "../Pages/About";
import PhoneDetails from "../Pages/PhoneDetails";

  export const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      errorElement: <ErrorPage/> ,
      children: [
        {
            path: '/',
            Component: Home,
        },
        {
            path:'/favorite',
            Component: Favorite,
        }, 
        {
            path: '/about',
            Component: About
        },
        {
            path: '/phone-details',
            Component: PhoneDetails,
        }
      ]
    },
  ]);