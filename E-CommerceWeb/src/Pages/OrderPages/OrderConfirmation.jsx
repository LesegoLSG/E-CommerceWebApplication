import React from "react";
import { useNavigate } from "react-router-dom";

const OrderConfirmation = () => {
  const navigate = useNavigate();
  // Sample cart items
  const cartItems = [
    {
      id: 1,
      name: "Sample",
      image: "https://via.placeholder.com/150",
      description: "Sample Product 1 testing to check if it works.",
      price: "R20.00",
      quantity: 1,
    },
    {
      id: 2,
      name: "Sample",
      image: "https://via.placeholder.com/150",
      description: "Sample Product 2",
      price: "R15.00",
      quantity: 2,
    },
    {
      id: 3,
      name: "Sample",
      image: "https://via.placeholder.com/150",
      description: "Sample Product 3",
      price: "R18.00",
      quantity: 3,
    },
  ];

  return (
    <section className="container mx-auto  py-8 px-4 md:px-16 lg:px-24 lg:py-10">
      <div className="space-y-4">
        <h2 className="h3">Thank you for placing an order with Less-Ego</h2>
        <p className="text-lg">
          Your order has been placed successfully, you will receive an email
          with order details
        </p>
      </div>

      <div className="w-full shadow-md border rounded p-6 mt-2 flex flex-col flex-wrap gap-y-4">
        <div>
          <h3 className="h4">Order summary</h3>
          <p>Order number: 12345</p>
        </div>
        <div>
          <h3 className="h4">Shipping Information</h3>
          <p>
            1376 Matlomo Street<br></br>Moletsane<br></br>Soweto Johannesburg
          </p>
        </div>

        <h3 className="h4">Items ordered</h3>

        {cartItems.map((item) => (
          <div className="flex justify-between items-center">
            <img src={item.image} className="w-16 h-16" />
            <p>{item.description}</p>
            <p>{item.price}</p>
            <p>{item.quantity}</p>
          </div>
        ))}
      </div>
      <div className="my-4 space-x-2">
        <button className="button">Track Order</button>
        <button className="button bg-red-600" onClick={() => navigate("/")}>
          Continue Shopping
        </button>
      </div>
    </section>
  );
};

export default OrderConfirmation;
