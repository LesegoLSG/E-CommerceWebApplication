import React, { useState,useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import Logo1 from "../assets/Logo1.png";
import { FaRegUser } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { PiSignInFill } from "react-icons/pi";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useModal } from "../Context/ModalContext";
import { useCart } from "../Context/CartItemsContext";
import ScrollToTop from "./Reusables/ScrollToTop/ScrollToTop";
import { useAuthenticatedUser } from "../Authentication/AuthUserContext/AuthenticatedUserContext";
import AuthService from "../Authentication/AuthService/AuthService";
import ConfirmationBox from "./Reusables/Dialogs/ConfirmationBox";
import ShopByCategoryMenu from "./Reusables/ShopByCategoryMenu/ShopByCategoryMenu";
import SearchBar from "./Reusables/SearchBar/SearchBar";
import AnimatedSearchBar from "./Reusables/AnimatedSearchBar/AnimatedSearchBar"

const NavBar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false); //Confirmation dialog
  const navigate = useNavigate();
  const { authenticatedUser, setAuthenticatedUser } = useAuthenticatedUser();
  const location = useLocation();
  //hide on scroll down, show on scroll up navbar behavior states.
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Show and hide animated search bar
  const [showSearch, setShowSearch] = useState(false);


  const { handleOpenCart, handleOpenRegister, handleOpenLogin } = useModal();
  const { cartItems } = useCart();

   //hide on scroll down, show on scroll up navbar behavior useEffect.
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // scrolling down → hide navbar
        setIsVisible(false);
      } else {
        // scrolling up → show navbar
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

   //Dummy data of categoies
  const categories = [
    { id: "clothing", name: "Clothing" },
    { id: "shoes", name: "Shoes" },
    { id: "jewellery", name: "Jewellery" },
    { id: "bags", name: "Bags" },
    { id: "accessories", name: "Accessories" },
  ];

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
  //Nav items for medium screen
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
//Nav items for small screen
  // const navItems = [
  //   {
  //     title: "Home",
  //     sectionId: "/",
  //   },
  //   {
  //     title: "Shop",
  //     sectionId: "shopping",
  //   },
  //   {
  //     title: "New Arrivals",
  //     sectionId: "new-arrivals",
  //   },
  //   {
  //     title: "Best seller",
  //     sectionId: "/",
  //   },
  //   {
  //     title: "Craft",
  //     sectionId: "/",
  //   },
  // ];


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
    <header className={`bg-primaryBG min-w-screen-2xl fixed top-0 left-0 w-full z-50 transform transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}>
    
    
      <nav className="flex justify-between items-center py-2 px-4">
        <div className="flex">
            <div className="w-full flex justify-start items-center">
              {/* Logo  */}
              <a href="/">
               <img src={Logo1} className="w-24" />
              </a>
            </div>
          <ul className="hidden md:flex flex-nowrap items-center justify-end text-black space-x-6">
            {navItems.map(({ title, sectionId }) => (
              <li
                key={title}
                className="hover:underline cursor-pointer"
                onClick={() => handleNavigation(sectionId)}
              >
                {title}
                
              </li>
            ))}
            {navPageItems.map(({ title, pageToGo }) => (
              <li
                key={title}
                className="hover:underline cursor-pointer"
                onClick={() => navigate(pageToGo)}
              >
                {title}
              </li>
            ))}
          </ul>
        </div>

        {/* Account and shpping btn */}
        <div className="text-Black sm:flex items-center gap-x-4 hidden">
          {authenticatedUser ? (
            <a
              className="flex items-center cursor-pointer gap-2"
              onClick={handleLogoutClick}
            >
              <IoMdLogOut /> Logout
            </a>
          ) : (
            <div className="flex gap-2">
               <a
                className="cursor-pointer hover:underline"
                onClick={handleOpenLogin}
              >
               
                Login
              </a>
                <span className="text-gray-400">|</span>
              <a
                className="cursor-pointer hover:underline"
                onClick={handleOpenRegister}
              >
              
                Register
              </a>
                <span className="text-gray-400">|</span>
                <a
                className="cursor-pointer hover:underline"
                onClick={handleOpenRegister}
              >
              
                Wishlist
              </a>
                <span className="text-gray-400">|</span>
                <a
                className="cursor-pointer hover:underline"
                onClick={handleOpenRegister}
              >
              
                My Account
              </a>
             
            </div>
          )}

          

          <button className="flex items-center gap-2" onClick={handleOpenCart}>
            <span
              className={`${
                cartItems?.items?.length > 0 ? "bg-green-600" : "bg-red-600"
              } w-6 h-6 rounded-full flex justify-center items-center text-xl font-semibold text-white`}
            >
              {cartItems !== null ? cartItems?.items?.length : "0"}
            </span>
            <FaShoppingCart />
          </button>
        </div>

        {/* Navbar for small devices */}
        <div className="sm:hidden flex gap-2 sticky">
         
              <IoSearchOutline className="self-center" onClick={() => setShowSearch(true)}/>
       
          
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

      {/* <div className="w-full "> */}
        {/* Logo  */}
        {/* <a href="/">
          <img src={Logo1} className="w-24" />
        </a>
      </div> */}
       <div className="hidden w-full md:flex flex-row bg-green-600 px-12 py-2">
        <ShopByCategoryMenu categories={categories} scrollToSection={scrollToSection}/>
        <SearchBar/>
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
     
      <AnimatedSearchBar showSearch={showSearch} setShowSearch={setShowSearch} />
    </header>
  );
};

export default NavBar;
