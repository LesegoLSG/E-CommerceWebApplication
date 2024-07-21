import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import Logo1 from "../assets/Logo1.png";
import { FaRegUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NavBar = ({ onOpenCart }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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
      title: "Contact",
      sectionId: "contact-section",
    },
    {
      title: "Craft",
      sectionId: "/",
    },
  ];
  return (
    <header className="bg-primaryBG min-w-screen-2xl xl:px-28 px-4">
      <nav className="flex justify-between items-center container md:py-4 pt-6 pb-3">
        {/* Search Icon */}
        <IoSearchOutline className="text-Black w-5 h-5 cursor-pointer hidden md:block" />

        {/* Logo */}
        <a href="/">
          <img src={Logo1} className="w-24" />
        </a>

        {/* Account and shpping btn */}
        <div
          className="text-lg text-Black sm:flex items-center gap-x-8 hidden"
          onClick={onOpenCart}
        >
          <a href="/" className="flex items-center gap-2">
            <FaRegUser />
            Login
          </a>

          <button className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-red-600 flex justify-center items-center text-xl font-semibold text-white">
              0
            </span>
            <FaShoppingCart />
          </button>
        </div>

        {/* Navbar for small devices */}
        <div className="sm:hidden flex gap-2">
          <button className="flex items-center gap-2" onClick={onOpenCart}>
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
      <hr />

      {/* Category items*/}
      <div className="pt-4">
        <ul className="lg:flex items-center justify-between text-Black hidden">
          {navItems.map(({ title, sectionId }) => (
            <li
              key={title}
              className="hover:text-Purple"
              onClick={() => handleNavigation(sectionId)}
            >
              {title}
            </li>
          ))}
        </ul>
      </div>

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
    </header>
  );
};

export default NavBar;
