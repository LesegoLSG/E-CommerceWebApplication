import React, { useState } from "react";
import { useModal } from "../../Context/ModalContext";
import { IoMdClose } from "react-icons/io";
import GoogleInput from "../Reusables/GoogleInput";
import AxiosPublicInstance from "../../Authentication/AxiosInstances/AxiosPublicInstance";
import {
  validateLettersOnly,
  validateEmail,
  validatePhoneNumber,
  validatePassword,
} from "../Reusables/Validations/Validations";

const CustomerRegistration = () => {
  const { handleCloseRegister, handleOpenLogin } = useModal();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNo: "",
    password: "",
    confirmPassword: "",
    roles: ["CUSTOMER"],
  });

  const [error, setError] = useState("");

  // Handle input change
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const CloseRegisterOpenLogin = () => {
    handleCloseRegister();
    handleOpenLogin();
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password != formData.confirmPassword) {
      setError("passwords do not match"); //set a dialog
      return;
    }

    // Create registerObject without confirmPassword
    const { confirmPassword, ...registerObject } = formData;

    //Sending an API
    try {
      const response = await AxiosPublicInstance.post(
        "users/add",
        registerObject
      );
      setError(response.data.message);
    } catch (error) {
      if (error?.response?.data?.message == undefined) {
        setError("Oops something went wrong try again later.");
      } else {
        setError(error?.response?.data?.message);
      }
    }

    // You can send this object to your API or handle it accordingly
  };

  const handleClose = (e) => {
    if (e.target.id == "register-container") handleCloseRegister();
  };
  return (
    <section
      id="register-container"
      onClick={handleClose}
      className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-center"
    >
      {/* close modal  */}

      <div className=" bg-white w-[85%] h-auto lg:w-[50%] m-20 rounded-lg">
        <div className="flex justify-end items-center">
          <IoMdClose
            size={30}
            onClick={handleCloseRegister}
            className="cursor-pointer text-red-600"
          />
        </div>
        <div className=" p-6 md:p-20">
          <h1 className="text-3xl font-bold text-black mb-6">Register</h1>
          {/* body */}
          <form
            className="flex flex-col justify-center items-start"
            onSubmit={handleSubmit}
          >
            <div className="w-full  flex flex-col md:flex-row justify-center items-center gap-x-6">
              <div className="w-full flex flex-col justify-between items-start py-2">
                <GoogleInput
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  validate={validateLettersOnly}
                  name="firstName"
                  type="text"
                  errorMessage={"Letters only"}
                />
              </div>
              <div className="w-full flex flex-col justify-between items-start py-2">
                <GoogleInput
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  validate={validateLettersOnly}
                  name="lastName"
                  type="text"
                  errorMessage={"Letters only"}
                />
              </div>
            </div>

            <div className="w-full  flex flex-col md:flex-row justify-center items-center gap-x-6">
              <div className="w-full flex flex-col justify-between items-start py-2">
                <GoogleInput
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  validate={validateEmail}
                  name="email"
                  type="email"
                  errorMessage={"example@mail.com"}
                />
              </div>
              <div className="w-full flex flex-col justify-between items-start py-2">
                <GoogleInput
                  placeholder="contact Number"
                  value={formData.contactNo}
                  onChange={handleInputChange}
                  validate={validatePhoneNumber}
                  name="contactNo"
                  type="text"
                  errorMessage={"eg-0110000000"}
                />
              </div>
            </div>

            <div className="w-full  flex flex-col md:flex-row justify-center items-center gap-x-6">
              <div className="w-full flex flex-col justify-between items-start py-2">
                <GoogleInput
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  validate={validatePassword}
                  name="password"
                  type="password"
                  errorMessage={
                    "Atleast 6 charactors long, at least 1 digit, 1 character"
                  }
                />
              </div>
              <div className="w-full flex flex-col justify-between items-start py-2">
                <GoogleInput
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  validate={validatePassword}
                  name="confirmPassword"
                  type="password"
                  errorMessage={
                    "Atleast 6 charactors long, at least 1 digit, 1 character"
                  }
                />
              </div>
            </div>
            {error ? <p className="text-red-600">{error}</p> : ""}
            <div className="flex items-center my-6">
              <input type="checkbox" className="w-5 h-5" />
              <span className="text-gray-600 ml-2">
                I agree to the Terms and Conditions
              </span>
            </div>
            {/* footer */}
            <div className="w-full flex justify-center h-auto ">
              <button className="button w-60 rounded-md" type="submit">
                Sign Up
              </button>
            </div>
            <h3
              className="cursor-pointer text-gray-600"
              onClick={CloseRegisterOpenLogin}
            >
              Already have an account?
            </h3>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CustomerRegistration;
