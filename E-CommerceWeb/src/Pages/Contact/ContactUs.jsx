import React from "react";
import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import GoogleInput from "../../Components/Reusables/GoogleInput";
import GoogleInputTextArea from "../../Components/Reusables/GoogleInputTextArea";

const ContactUs = () => {
  return (
    <section
      className="max-w-screen-2xl min-h-screen container mx-auto flex flex-col items-center xl:px-28 px-4 py-4"
      id="contact-section"
    >
      <div className="w-full flex justify-start">
        <a href="/" className="text-gray-800">
          Home
        </a>
        <a href="#" className="text-Black font-semibold">
          /Contact
        </a>
      </div>
      <div className="flex justify-center items-center my-6">
        <h1 className="title">Contact Us</h1>
      </div>

      <div className="w-full flex flex-col md:flex-row gap-16 justify-center items-center">
        <h1 className="title w-full md:w-1/2">Let's Get In Touch</h1>
        {/* Contact form */}
        <div className="w-full h-auto flex flex-col justify-center items-center gap-y-6 my-auto">
          <GoogleInput placeholder="Full Name" />
          <GoogleInput placeholder="Email Address" />
          <GoogleInputTextArea placeholder="Message" />
          <button className="button">Send</button>
        </div>
        {/* Contact details */}
        <div className="w-full md:w-1/2 h-auto flex flex-col gap-y-6">
          <div>
            <h2 className="subheading">Email Us</h2>
            <p>lesegomhlongo78@gmail.com</p>
          </div>
          <div>
            <h2 className="subheading">Call Us</h2>
            <p>+27 64 037 3089</p>
          </div>
          <div>
            <h2 className="subheading">Follow Us</h2>
            <div className="flex gap-4">
              <FaWhatsapp className="text-2xl cursor-pointer text-Black" />
              <FaFacebook className="text-2xl cursor-pointer text-Black" />
              <FaTwitter className="text-2xl cursor-pointer text-Black" />
              <FaInstagram className="text-2xl cursor-pointer text-Black" />
            </div>
          </div>
          <div>
            <h2 className="subheading">Visit Us</h2>
            <p>
              1376 Matlomo Street
              <br />
              Soweto
              <br />
              Moletsane
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
