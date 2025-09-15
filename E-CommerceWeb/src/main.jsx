import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import ShopProduct from "./Pages/ShopProduct/ShopProduct.jsx";
import Checkout from "./Pages/Checkout/Checkout.jsx";
import { ModalProvider } from "./Context/ModalContext.jsx";
import OrderConfirmation from "./Pages/OrderPages/OrderConfirmation.jsx";
import { ProductsProvider } from "./Context/ProductContext.jsx";
import { CartProvider } from "./Context/CartItemsContext.jsx";
import ContactUs from "./Pages/Contact/ContactUs.jsx";
import { LoadingProvider } from "./Context/LoadingContext.jsx";
import { UserProvider } from "./Authentication/AuthUserContext/AuthenticatedUserContext.jsx";

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
        path: "/orderConfirmation",
        element: <OrderConfirmation />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <ProductsProvider>
      <CartProvider>
        <LoadingProvider>
          <ModalProvider>
            <RouterProvider router={router} />
          </ModalProvider>
        </LoadingProvider>
      </CartProvider>
    </ProductsProvider>
  </UserProvider>
);
