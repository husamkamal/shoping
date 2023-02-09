import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop/Index";
import SingleProduct from "./Pages/SingleProduct";
import Gallary from "./Pages/Gallary";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/shop",
        element: <Shop />,
    },
    {
        path: "/shop/:id",
        element: <SingleProduct />,
    },
    {
        path: "/gallary",
        element: <Gallary />,
    },
  ]);

  export default router;