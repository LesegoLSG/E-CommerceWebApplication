import React from "react";
import GoogleInput from "../../Components/Reusables/GoogleInput";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";

const PaymentInformation = ({ setPaymentInfo, paymentInfo }) => {
  return (
    <div className="border rounded-2xl p-4 md:p-6 shadow-lg bg-white transition-all">
      {/* Header */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setPaymentInfo(!paymentInfo)}
      >
        <h3 className="text-lg md:text-xl font-semibold text-gray-800">
          Payment Information
        </h3>
        {paymentInfo ? (
          <IoIosArrowUp size={28} className="text-gray-600" />
        ) : (
          <IoIosArrowDown size={28} className="text-gray-600" />
        )}
      </div>

      {/* Collapsible Section */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          paymentInfo ? "max-h-screen mt-6" : "max-h-0 overflow-hidden"
        }`}
      >
        {/* Payment Methods */}
        <div className="flex space-x-4 justify-start mb-6">
          <div className="p-3 border rounded-xl shadow hover:shadow-md cursor-pointer transition">
            <FaCcVisa size={40} className="text-blue-600" />
          </div>
          <div className="p-3 border rounded-xl shadow hover:shadow-md cursor-pointer transition">
            <FaCcMastercard size={40} className="text-red-500" />
          </div>
          <div className="p-3 border rounded-xl shadow hover:shadow-md cursor-pointer transition">
            <FaCcPaypal size={40} className="text-indigo-600" />
          </div>
        </div>

        {/* Inputs */}
        <div className="space-y-4">
          <GoogleInput placeholder="Address" />
          <GoogleInput placeholder="City" />
          <GoogleInput placeholder="Zip Code" />
          <GoogleInput placeholder="Card Number" />
          <GoogleInput placeholder="Card Holder Name" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <GoogleInput placeholder="Expiry Date (MM/YY)" />
            <GoogleInput placeholder="CVV" />
          </div>
        </div>

        {/* Pay Button */}
        <div className="mt-6">
          <button className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow hover:opacity-90 transition">
            Confirm & Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentInformation;
