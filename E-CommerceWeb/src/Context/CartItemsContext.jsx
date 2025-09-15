import { createContext, useContext, useState } from "react";
import axios from "axios";
import AxiosPrivateInstance from "../Authentication/AxiosInstances/AxiosPrivateInstance";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart
  const addToCart = async (productId, quantity) => {
    const formData = new FormData();
    formData.append("productId", productId);
    formData.append("quantity", quantity);
    try {
      const response = await AxiosPrivateInstance.post(
        "/cartItems/add",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setCartItems((prev) =>
        Array.isArray(prev)
          ? [...prev, { productId, quantity }]
          : [{ productId, quantity }]
      ); // Update local state
      console.log(response.data.message);
    } catch (error) {
      console.error("Error adding to cart:", error.response?.data.message);
    }
  };

  // Update item quantity
  const updateQuantity = async (cartId, itemId, quantity) => {
    try {
      const response = await AxiosPrivateInstance.put(
        `/api/cartItems/cart/${cartId}/item/${itemId}/update`,
        { quantity }
      );
      setCartItems((prev) =>
        prev.map((item) =>
          item.productId === itemId ? { ...item, quantity } : item
        )
      );
      console.log(response.data.message);
    } catch (error) {
      console.error("Error updating quantity:", error.response?.data.message);
    }
  };

  // Delete item from cart
  const removeFromCart = async (cartId, itemId) => {
    try {
      const response = await AxiosPrivateInstance.delete(
        `/cartItems/cart/${cartId}/item/${itemId}/delete`
      );
      setCartItems((prev) =>
        Array.isArray(prev)
          ? prev.filter((item) => item.productId !== itemId)
          : []
      );
      console.log(response.data.message);
    } catch (error) {
      console.error("Error removing from cart:", error.response?.data.message);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
