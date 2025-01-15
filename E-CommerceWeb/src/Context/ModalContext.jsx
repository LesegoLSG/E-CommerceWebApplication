import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleOpenCart = () => setIsCartOpen(true);
  const handleCloseCart = () => setIsCartOpen(false);
  const handleOpenRegister = () => setIsRegisterOpen(true);
  const handleCloseRegister = () => setIsRegisterOpen(false);
  const handleOpenLogin = () => setIsLoginOpen(true);
  const handleCloseLogin = () => setIsLoginOpen(false);

  return (
    <ModalContext.Provider
      value={{
        isCartOpen,
        handleOpenCart,
        handleCloseCart,
        isRegisterOpen,
        handleOpenRegister,
        handleCloseRegister,
        isLoginOpen,
        handleOpenLogin,
        handleCloseLogin,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
