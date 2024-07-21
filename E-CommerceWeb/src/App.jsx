import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Cart from "./Components/Cart/Cart";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleOpenCart = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  return (
    <>
      <NavBar onOpenCart={handleOpenCart} />
      <Outlet />
      <Cart isOpen={isCartOpen} onClose={handleCloseCart} />
    </>
  );
}

export default App;
