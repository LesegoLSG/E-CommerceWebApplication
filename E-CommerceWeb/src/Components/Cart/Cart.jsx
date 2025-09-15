import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import { useModal } from "../../Context/ModalContext";
import { useCart } from "../../Context/CartItemsContext";
import { useAuthenticatedUser } from "../../Authentication/AuthUserContext/AuthenticatedUserContext";
import AxiosPrivateInstance from "../../Authentication/AxiosInstances/AxiosPrivateInstance";
import { AiFillDelete } from "react-icons/ai";
import ConfirmationBox from "../Reusables/Dialogs/ConfirmationBox";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, setCartItems, removeFromCart } = useCart();
  const { authenticatedUser } = useAuthenticatedUser();
  const { isCartOpen, handleCloseCart, handleOpenLogin } = useModal();
  const [error, setError] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  console.log("Authenticated user id", authenticatedUser.id);

  // Base url for to retrieve an image
  const BASE_URL = "http://localhost:9191";
  console.log("BASEURL:", BASE_URL);

  // Create a use effect to get the cart items for the cart and set the cartItems(useCart) right here.
  useEffect(() => {
    const fetchCartInfo = async () => {
      try {
        const response = await AxiosPrivateInstance.get(
          `/carts/${authenticatedUser.id}/getCartByUserId`
        );
        const data = response.data.data;
        setCartItems(data);
      } catch (error) {
        console.log(data.response.message);
      }
    };
    fetchCartInfo();
  }, []);
  // Close the cart
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

  // Show confirmation when delete icon is triggered
  const handleDeleteClick = (itemId) => {
    setItemToDelete(itemId);
    setShowConfirmation(true);
  };

  // Cancel delete operation
  const handleCancelDelete = () => {
    setShowConfirmation(false);
    setItemToDelete(null);
  };

  // Confirm deletion
  const handleConfirmationDelete = (e) => {
    e.preventDefault();
    if (itemToDelete) {
      removeFromCart(cartItems.id, itemToDelete);
    }
  };

  console.log("Cart items", cartItems);
  console.log("Cart items", cartItems.items);

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
                <th className="py-2 px-4 text-left">Unit Price</th>
                <th className="py-2 px-4 text-left">Total Price</th>
                <th className="py-2 px-4 text-left">Quantity</th>
                <th className="py-2 px-4 text-left">Remove item</th>
              </tr>
            </thead>
            <tbody>
              {cartItems?.items?.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="py-2 px-4">
                    <div className="w-full h-full">
                      {item?.product?.images ? (
                        <img
                          src={`${BASE_URL}${item.product?.images[0]?.downloadUrl}`}
                          alt={item.description}
                          className="w-16 h-16 object-cover"
                        />
                      ) : (
                        "Loading"
                      )}
                    </div>
                  </td>
                  <td className="py-2 px-4">{item.product?.description}</td>
                  <td className="py-2 px-4">{item.unitPrice}</td>
                  <td className="py-2 px-4">{item.totalPrice}</td>
                  <td className="py-2 px-4 ">
                    <div className="w-full h-full flex justify-center items-center gap-x-2">
                      <FaCircleMinus size={20} className="cursor-pointer" />
                      {item.quantity}
                      <FaCirclePlus
                        size={20}
                        className="cursor-pointer"
                        onClick={() => increaseQuantity(item.quantity)}
                      />
                    </div>
                  </td>
                  <td className="py-2 px-4">
                    <div className="w-full h-full flex justify-center items-center">
                      <AiFillDelete
                        size={25}
                        className="text-red-600 cursor-pointer"
                        onClick={() => handleDeleteClick(item.id)}
                      />
                    </div>
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
          <p className="">Cart Subtotal R{cartItems.totalAmount}</p>

          <p className="text-md font-semibold">
            Total R{cartItems.totalAmount}
          </p>
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
      {showConfirmation && (
        <ConfirmationBox
          message="Are you sure you want to remove this item from the cart?"
          onCancel={handleCancelDelete}
          onConfirm={handleConfirmationDelete}
        />
      )}
    </div>
  );
};

export default Cart;
