import React from "react";

const CustomerRegistration = () => {
  return (
    <section className="max-w-screen-2xl container mx-auto xl:px-28 px-4 flex justify-center items-center">
      <div className="w-full h-full p-6 md:p-20">
        <h1 className="text-3xl font-bold text-black mb-6">Register</h1>
        <form className="flex flex-col justify-center items-start">
          <div className="w-full  flex flex-col md:flex-row justify-center items-center gap-x-6">
            <div className="w-full flex flex-col justify-between items-start">
              <label className="text-gray-600 my-2">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                className="authInputField p-4"
              />
            </div>
            <div className="w-full flex flex-col justify-between items-start">
              <label className=" text-gray-600 my-2">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                className="authInputField p-4"
              />
            </div>
          </div>

          <div className="w-full  flex flex-col md:flex-row justify-center items-center gap-x-6">
            <div className="w-full flex flex-col justify-between items-start">
              <label className="text-gray-600 my-2">Email Address</label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="authInputField p-4"
              />
            </div>
            <div className="w-full flex flex-col justify-between items-start">
              <label className="text-gray-600 my-2">Phone Number</label>
              <input
                type="text"
                placeholder="Phone Number"
                className="authInputField p-4"
              />
            </div>
          </div>

          <div className="w-full  flex flex-col md:flex-row justify-center items-center gap-x-6">
            <div className="w-full flex flex-col justify-between items-start">
              <label className="text-gray-600 my-2">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="authInputField p-4"
              />
            </div>
            <div className="w-full flex flex-col justify-between items-start">
              <label className="text-gray-600 my-2">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="authInputField p-4"
              />
            </div>
          </div>

          <label className="text-gray-600 my-2">Shipping Address</label>
          <input
            type="text"
            placeholder="Street Address"
            className="authInputField p-4"
          />
          <input
            type="text"
            placeholder="City"
            className="authInputField p-4 mt-2"
          />
          <input
            type="text"
            placeholder="State/Province/Region"
            className="authInputField p-4 mt-2"
          />
          <input
            type="text"
            placeholder="Postal/ZIP Code"
            className="authInputField p-4 mt-2"
          />
          <input
            type="text"
            placeholder="Country"
            className="authInputField p-4 mt-2"
          />

          <div className="flex items-center my-6">
            <input type="checkbox" className="w-5 h-5" />
            <span className="text-gray-600 ml-2">
              I agree to the Terms and Conditions
            </span>
          </div>

          <button className="button w-full rounded-md">Register</button>
        </form>
      </div>
    </section>
  );
};

export default CustomerRegistration;
