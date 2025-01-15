import React, { useEffect, useState } from "react";
import GoogleInput from "../../Components/Reusables/GoogleInput";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import {
  validateLettersOnly,
  validateEmail,
  validatePhoneNumber,
} from "../../Components/Reusables/Validations/Validations";

const BillingInformation = ({
  setBillingInfoToggle,
  billingInfoToggle,
  authenticatedUser,
  handleSaveAndUpdateBilling,
}) => {
  const [billingData, setBillingData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    altNumber: "",
  });

  console.log("Authenticated User", authenticatedUser);
  console.log("details", billingData);

  const handleInputChange = (e) => {
    setBillingData({ ...billingData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (authenticatedUser && authenticatedUser.billing == null) {
      setBillingData({
        fullName: `${authenticatedUser.firstName} ${authenticatedUser.lastName}`,
        email: authenticatedUser.email,
        phoneNumber: authenticatedUser.contactNo,
        altNumber: "",
      });
    } else if (authenticatedUser && authenticatedUser.billing !== null) {
      setBillingData({
        fullName: authenticatedUser.billing.firstName,
        email: authenticatedUser.billing.email,
        phoneNumber: authenticatedUser.billing.contactNo,
        altNumber: authenticatedUser.billing.altNumber,
      });
    }
  }, [authenticatedUser]);

  const onSubmitBilling = (e) => {
    e.preventDefault();
    handleSaveAndUpdateBilling(billingData);
  };

  return (
    <form
      className="border p-2 mb-6 rounded-lg"
      onSubmit={() => onSubmitBilling()}
    >
      <div
        className="flex justify-between items-center"
        onClick={() => setBillingInfoToggle(!billingInfoToggle)}
      >
        <h3 className="subheading">Billing Information</h3>
        {billingInfoToggle ? (
          <IoIosArrowUp size={30} className="cursor-pointer" />
        ) : (
          <IoIosArrowDown size={30} className="cursor-pointer" />
        )}
      </div>

      <div className={`${billingInfoToggle ? "" : "hidden"} space-y-4 mt-4`}>
        <div className="space-y-4">
          <div className="w-full flex space-x-2">
            <GoogleInput
              placeholder={"Full Name"}
              name="fullName"
              type="text"
              value={billingData.fullName}
              onChange={handleInputChange}
              validate={validateLettersOnly}
              errorMessage="Letters only"
              className="w-full"
            />

            <GoogleInput
              placeholder={"Email"}
              name="email"
              type="email"
              value={billingData.email}
              onChange={handleInputChange}
              validate={validateEmail}
              errorMessage="example@gmail.com"
              className="w-full"
            />
          </div>

          <div className="w-full flex space-x-2">
            <GoogleInput
              placeholder={"Phone Number"}
              name="phoneNumber"
              type="text"
              value={billingData.phoneNumber}
              onChange={handleInputChange}
              validate={validatePhoneNumber}
              errorMessage="eg 011 111 1111"
              className="w-full"
            />

            <GoogleInput
              placeholder={"Alternative Number"}
              name="altNumber"
              type="text"
              value={billingData.altNumber}
              onChange={handleInputChange}
              validate={validatePhoneNumber}
              errorMessage="eg 011 111 1111"
              className="w-full"
            />
          </div>
        </div>
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default BillingInformation;
