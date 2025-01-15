import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BillingInformation from "./BillingInformation";
import ShippingInformation from "./ShippingInformation";
import PaymentInformation from "./PaymentInformation";
import { useAuthenticatedUser } from "../../Authentication/AuthUserContext/AuthenticatedUserContext";
import AxiosPrivateInstance from "../../Authentication/AxiosInstances/AxiosPrivateInstance";

const Checkout = () => {
  const navigate = useNavigate();
  //Toggles
  const [billingInfoToggle, setBillingInfoToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(false);
  const [paymentInfo, setPaymentInfo] = useState(false);
  //authenticated user
  const { authenticatedUser } = useAuthenticatedUser();

  const handleSaveAndUpdateBilling = async (data) => {
    try {
      const response = await AxiosPrivateInstance.post("/billing/add", data);
      if (response && response?.data?.data) {
        console.log(response.data.data.message);
      }
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

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
    <section className="container mx-auto py-8 min-h-96 md:px-16 lg:px-24">
      {/* Current link and link to homepage */}
      <div>
        <a href="/" className="text-gray-800">
          Home
        </a>
        <a href="#" className="text-Black font-semibold">
          /Checkout
        </a>
      </div>
      {/* Heading */}
      <h1 className="title">Checkout</h1>
      {/* Body */}
      <div className="flex flex-col lg:flex-row justify-between md:space-x-10 mt-8">
        <div className="md:w-2/3">
          {/* Billing Info */}
          <BillingInformation
            authenticatedUser={authenticatedUser}
            handleSaveAndUpdateBilling={handleSaveAndUpdateBilling}
            setBillingInfoToggle={setBillingInfoToggle}
            billingInfoToggle={billingInfoToggle}
          />
          <ShippingInformation
            setShippingToggle={setShippingToggle}
            shippingToggle={shippingToggle}
          />
          <PaymentInformation
            setPaymentInfo={setPaymentInfo}
            paymentInfo={paymentInfo}
          />
        </div>
        <div className="md:w-1/3 min-h-min bg-white p-6 shadow-md border rounded">
          <h3 className="subheading">Order Summary</h3>
          <div className="space-y-4">
            {cartItems.map((product) => (
              <div key={product.id} className="flex ">
                <div className="w-full flex items-center justify-between">
                  <img
                    src={product.image}
                    alt=""
                    className="w-16 h-16 object-contain rounded"
                  />
                  <div className="">
                    <h4 className="text-md font-semibold">{product.name}</h4>
                    <p className="text-gray-600">
                      {product.price} x {product.quantity}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 border-t pt-4">
            <div className="w-full flex justify-between">
              <span>Total Price:</span>
              <span className="font-semibold">R1582.00</span>
            </div>
          </div>
          <div className="w-full p-2">
            <button
              className="button w-full"
              onClick={() => navigate("/orderConfirmation")}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
