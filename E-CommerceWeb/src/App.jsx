import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Cart from "./Components/Cart/Cart";
import { useModal } from "./Context/ModalContext";
import CustomerRegistrationModal from "./Components/Registration/CustomerRegistrationModal";
import Login from "./Components/Login/Login";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/Reusables/ScrollToTop/ScrollToTop";
function App() {
  const { isCartOpen, isRegisterOpen, isLoginOpen } = useModal();

  console.log("APP isCartOpen", isCartOpen);
  console.log("APP isRegisterOpen", isCartOpen);
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <Outlet />
      {isCartOpen && <Cart />}
      {isRegisterOpen && <CustomerRegistrationModal />}
      {isLoginOpen && <Login />}
      <Footer />
    </>
  );
}

export default App;
