import React from "react";
import { useNavigate } from "react-router-dom";
import LoginImage from "../../assets/LoginImages/LoginImage.jpg";

const Login = () => {
  const navigate = useNavigate();
  return (
    <section className="max-w-screen-2xl container mx-auto xl:px-28 px-4 flex justify-center items-center">
      {/* Welcome text */}
      <div className="hidden w-full h-full md:flex justify-center items-center relative">
        <img
          src={LoginImage}
          alt="LoginImage"
          className="w-full h-full object-cover "
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="text-6xl font-bold text-white absolute">Welcome Back</h1>
      </div>
      {/* Login form */}
      <div className="w-full h-full p-6 md:p-20">
        <h1 className="text-3xl font-bold text-Black mb-6">Login</h1>
        <p className="text-gray-600 mb-6">
          Welcome back! Please login to your account
        </p>
        <form className="flex flex-col justify-center items-start">
          <label className="text-gray-600 my-6">User Name</label>
          <input
            type="email"
            placeholder="example@gmail.com"
            className="authInputField p-4"
          />
          <label className="text-gray-600 my-6">Password</label>
          <input
            type="password"
            placeholder="Password"
            className="authInputField p-4"
          />
          <div className="w-full flex justify-between items-center my-6">
            <label className="flex items-center">
              <input type="checkbox" className="w-5 h-5 " />
              <span className="text-gray-600 ml-2">Remember me?</span>
            </label>
            <p className="text-gray-600 mb-6">Forgot Password?</p>
          </div>

          <button className="button w-full rounded-md">Login</button>
        </form>
        <div className="my-12">
          <p className="text-lg">
            New User?{" "}
            <span
              className="text-Purple font-semibold cursor-pointer"
              onClick={() => navigate("/customer-registration")}
            >
              {" "}
              Signup
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
