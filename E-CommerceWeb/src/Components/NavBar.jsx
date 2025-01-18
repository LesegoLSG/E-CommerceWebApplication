import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import Logo1 from "../assets/Logo1.png";
import { FaRegUser } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { PiSignInFill } from "react-icons/pi";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useModal } from "../Context/ModalContext";
import { useCart } from "../Context/CartContext";
import ScrollToTop from "./Reusables/ScrollToTop/ScrollToTop";
import { useAuthenticatedUser } from "../Authentication/AuthUserContext/AuthenticatedUserContext";
import AuthService from "../Authentication/AuthService/AuthService";
import ConfirmationBox from "./Reusables/Dialogs/ConfirmationBox";

const NavBar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false); //Confirmation dialog
  const navigate = useNavigate();
  const { authenticatedUser, setAuthenticatedUser } = useAuthenticatedUser();
  const location = useLocation();

  const { handleOpenCart, handleOpenRegister, handleOpenLogin } = useModal();
  const { cartItems } = useCart();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavigation = (sectionId) => {
    if (location.pathname === "/") {
      scrollToSection(sectionId);
    } else {
      navigate("/", { state: { sectionId } });
    }
  };

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const navItems = [
    {
      title: "Home",
      sectionId: "/",
    },
    {
      title: "Shop",
      sectionId: "shopping",
    },
    {
      title: "New Arrivals",
      sectionId: "new-arrivals",
    },
    {
      title: "Best seller",
      sectionId: "/",
    },
    {
      title: "Craft",
      sectionId: "/",
    },
  ];

  const navPageItems = [
    {
      title: "Contact",
      pageToGo: "/contact",
    },
  ];

  // Handle showing logout confirmation
  const handleLogoutClick = () => {
    setShowLogoutConfirmation(true);
  };

  // Handle confirming the logout
  const handleLogoutConfirm = () => {
    AuthService.logout(setAuthenticatedUser);
    setShowLogoutConfirmation(false);
    navigate("/"); // Redirect to home
  };

  // Handle canceling the logout
  const handleLogoutCancel = () => {
    setShowLogoutConfirmation(false);
  };

  return (
    <header className="bg-primaryBG min-w-screen-2xl xl:px-28 px-4">
      <nav className="flex justify-between items-center container md:py-4 pt-6 pb-3">
        <div className="pt-4">
          <ul className="lg:flex items-center justify-end text-Black font-semibold hidden space-x-4">
            {navItems.map(({ title, sectionId }) => (
              <li
                key={title}
                className="hover:text-Green cursor-pointer"
                onClick={() => handleNavigation(sectionId)}
              >
                {title}
              </li>
            ))}
            {navPageItems.map(({ title, pageToGo }) => (
              <li
                key={title}
                className="hover:text-Green cursor-pointer"
                onClick={() => navigate(pageToGo)}
              >
                {title}
              </li>
            ))}
          </ul>
        </div>

        {/* Account and shpping btn */}
        <div className="text-lg text-Black font-semibold sm:flex items-center gap-x-4 hidden">
          {authenticatedUser ? (
            <a
              className="flex items-center cursor-pointer gap-2"
              onClick={handleLogoutClick}
            >
              <IoMdLogOut /> Logout
            </a>
          ) : (
            <div className="flex gap-2">
              <button
                className="button-alt flex items-center cursor-pointer gap-2"
                onClick={handleOpenRegister}
              >
                <FaRegUser />
                Sign Up
              </button>
              <button
                className="button-action flex items-center cursor-pointer"
                onClick={handleOpenLogin}
              >
                <PiSignInFill />
                Login
              </button>
            </div>
          )}

          <button className="flex items-center gap-2" onClick={handleOpenCart}>
            <span
              className={`${
                cartItems.length > 0 ? "bg-green-600" : "bg-red-600"
              } w-6 h-6 rounded-full flex justify-center items-center text-xl font-semibold text-white`}
            >
              {cartItems.length}
            </span>
            <FaShoppingCart />
          </button>
        </div>

        {/* Navbar for small devices */}
        <div className="sm:hidden flex gap-2 sticky">
          <button className="flex items-center gap-2" onClick={handleOpenCart}>
            <span className="w-6 h-6 rounded-full bg-red-600 flex justify-center items-center text-xl font-bold text-white">
              0
            </span>
            <FaShoppingCart />
          </button>
          <button onClick={toggleMenu}>
            {isOpenMenu ? (
              <FaTimes className="w-5 h-5 text-Black" />
            ) : (
              <FaBars className="w-5 h-5 text-Black" />
            )}
          </button>
        </div>
      </nav>
      {/* Confirmation Box for Logout */}
      {showLogoutConfirmation && (
        <ConfirmationBox
          message="Are you sure you want to logout?"
          onConfirm={handleLogoutConfirm}
          onCancel={handleLogoutCancel}
        />
      )}

      <div className="w-full ">
        {/* Logo  */}
        <a href="/">
          <img src={Logo1} className="w-24" />
        </a>
      </div>
      <hr />

      {/* small screen Category items */}
      <div className="">
        <ul
          className={`bg-Black text-white px-4 py-2 rounded ${
            isOpenMenu ? "md:hidden" : "hidden"
          }`}
        >
          <button>Logins</button>
          {navItems.map(({ title, sectionId }) => (
            <li
              key={title}
              className="hover:text-Purple my-3 cursor-pointer"
              onClick={() => handleNavigation(sectionId)}
            >
              {title}
            </li>
          ))}
        </ul>
      </div>
      <ScrollToTop />
    </header>
  );
};

export default NavBar;
