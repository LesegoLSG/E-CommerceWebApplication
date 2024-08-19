import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import ShopProduct from "./Pages/ShopProduct/ShopProduct.jsx";
import Checkout from "./Pages/Checkout/Checkout.jsx";
import Login from "./Pages/Login/Login.jsx";
import CustomerRegistration from "./Pages/Registration/CustomerRegistration.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop/:id",
        element: <ShopProduct />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/customer-registration",
        element: <CustomerRegistration />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
