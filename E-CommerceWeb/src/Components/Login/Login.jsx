import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { useModal } from "../../Context/ModalContext";
import GoogleInput from "../Reusables/GoogleInput";
import AxiosPublicInstance from "../../Authentication/AxiosInstances/AxiosPublicInstance";
import AuthService from "../../Authentication/AuthService/AuthService";
import { useAuthenticatedUser } from "../../Authentication/AuthUserContext/AuthenticatedUserContext";
import {
  validateEmail,
  validatePassword,
} from "../Reusables/Validations/Validations";

const Login = () => {
  const navigate = useNavigate();
  const { authenticatedUser, setAuthenticatedUser } = useAuthenticatedUser();
  const { handleCloseLogin, handleOpenRegister } = useModal();

  const [signIn, setSignIn] = useState({
    email: "",
    password: "",
  });

  // Handle input change
  const handleInputChange = (e) => {
    setSignIn({ ...signIn, [e.target.name]: e.target.value });
  };

  // Closing the login modal
  const handleClose = (e) => {
    if (e.target.id == "login-container") handleCloseLogin();
  };

  // Switching modals from login to register
  const CloseLoginOpenRegister = () => {
    handleCloseLogin();
    handleOpenRegister();
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(signIn);
    try {
      const response = await AxiosPublicInstance.post("/auth/login", signIn);
      console.log("login response");
      if (response?.data?.data?.token) {
        AuthService.setAccessToken(response?.data?.data?.token);
        AuthService.setRefreshToken(response?.data?.data?.refreshToken);
        AuthService.getAuthenticatedUser(
          response?.data?.data?.id,
          setAuthenticatedUser
        );
        handleCloseLogin();
      }
    } catch (error) {
      console.log("error:", error?.response?.data?.message);
    }
  };

  return (
    <section
      id="login-container"
      onClick={handleClose}
      className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-center"
    >
      {/* Login form */}
      <div className="bg-white w-[90%] lg:w-1/2 h-auto rounded-lg">
        <div className="flex justify-end items-center">
          <IoMdClose
            size={30}
            onClick={handleCloseLogin}
            className="cursor-pointer text-red-600"
          />
        </div>
        <div className=" p-6 md:p-20">
          <h1 className="text-3xl font-bold text-Black mb-6">Login</h1>
          <p className="text-gray-600 mb-6">
            Welcome back! Please login to your account
          </p>
          <form
            className="flex flex-col justify-center items-start gap-y-4"
            onSubmit={handleLogin}
          >
            <GoogleInput
              placeholder="Email Address"
              type="text"
              name="email"
              value={signIn.email}
              onChange={handleInputChange}
              validate={validateEmail}
              errorMessage="Invalid email format"
            />

            <GoogleInput
              placeholder="password"
              type="password"
              name="password"
              onChange={handleInputChange}
            />
            <div className="w-full flex justify-between items-center my-6">
              <label className="flex items-center">
                <input type="checkbox" className="w-5 h-5 " />
                <span className="text-gray-600 ml-2">Remember me?</span>
              </label>
              <p className="text-gray-600 ">Forgot Password?</p>
            </div>

            <button className="button rounded-md" type="submit">
              Login
            </button>
          </form>
          <div className="my-2">
            <p className="text-lg">
              New User?{" "}
              <span
                className="text-Purple font-semibold cursor-pointer"
                onClick={CloseLoginOpenRegister}
              >
                {" "}
                Signup
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
