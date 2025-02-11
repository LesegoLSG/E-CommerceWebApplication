import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import { useModal } from "../../Context/ModalContext";
import { useCart } from "../../Context/CartContext";
import { useAuthenticatedUser } from "../../Authentication/AuthUserContext/AuthenticatedUserContext";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const { authenticatedUser } = useAuthenticatedUser();
  const { isCartOpen, handleCloseCart, handleOpenLogin } = useModal();

  const handleClose = () => {
    navigate("/");
    handleCloseCart();
  };

  const handleCheckout = () => {
    if (authenticatedUser !== null) {
      navigate("/checkout");
      handleCloseCart();
    } else {
      handleOpenLogin();
    }
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full bg-white shadow-lg transition-transform duration-300 ${
        isCartOpen ? "translate-x-0" : "translate-x-full z-50"
      }`}
      onClick={handleClose}
    >
      <div
        className="w-[95vw] md:w-[30vw] h-full bg-Black relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={handleClose} className="absolute top-4 right-4">
          <IoMdClose className="text-red-600" size={30} />
        </button>
        <h2 className="p-4 text-xl font-bold text-white">Cart</h2>
        {/* Cart content */}
        <div className="overflow-x-auto mt-12">
          <table className="min-w-full text-white">
            <thead className="bg-Black/">
              <tr>
                <th className="py-2 px-4 text-left">Image</th>
                <th className="py-2 px-4 text-left">Description</th>
                <th className="py-2 px-4 text-left">Price</th>
                <th className="py-2 px-4 text-left">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="py-2 px-4">
                    <img
                      src={item.image}
                      alt={item.description}
                      className="w-16 h-16"
                    />
                  </td>
                  <td className="py-2 px-4">{item.description}</td>
                  <td className="py-2 px-4">{item.price}</td>
                  <td className="py-2 px-4 w-full h-full flex justify-center items-center gap-x-2">
                    <FaCircleMinus size={20} className="cursor-pointer" />
                    {item.quantity}
                    <FaCirclePlus
                      size={20}
                      className="cursor-pointer"
                      onClick={() => increaseQuantity(item.quantity)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <form className="w-full h-auto mt-6 flex gap-x-4 items-center px-4">
          <input
            type="text"
            placeholder="Enter Your Coupon"
            className="h-10 rounded-md w-60"
          />
          <button className="text-lg bg-blue-600 px-4 py-2 rounded-md text-white">
            Apply
          </button>
        </form>

        <div className="text-white pt-8 px-4">
          <p className="text-lg font-semibold">Cart Totals</p>
          <p className="">Cart Subtotal R335</p>
          <p className="">Shipping Free</p>
          <p className="text-md font-semibold">Total R335</p>
        </div>
        <div className="w-full flex justify-center items-center my-12">
          <button
            className="bg-green-600 p-4 rounded-md text-white"
            onClick={() => handleCheckout()}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
