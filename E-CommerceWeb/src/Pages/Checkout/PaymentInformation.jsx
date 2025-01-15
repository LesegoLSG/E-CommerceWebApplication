import React from "react";
import GoogleInput from "../../Components/Reusables/GoogleInput";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const PaymentInformation = ({ setPaymentInfo, paymentInfo }) => {
  return (
    <div className="border p-2 mb-6 rounded-lg">
      <div
        className="flex justify-between items-center"
        onClick={() => setPaymentInfo(!paymentInfo)}
      >
        <h3 className="subheading">Payment Information</h3>
        {paymentInfo ? (
          <IoIosArrowUp size={30} className="cursor-pointer" />
        ) : (
          <IoIosArrowDown size={30} className="cursor-pointer" />
        )}
      </div>
      {/* Payment */}
      <div className={`${paymentInfo ? "" : "hidden"} space-y-4 mt-4`}>
        <div className="space-y-4">
          <div>
            <GoogleInput placeholder={"Address"} />
          </div>

          <div>
            <GoogleInput placeholder={"City"} />
          </div>

          <div>
            <GoogleInput placeholder={"Zip code"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentInformation;
