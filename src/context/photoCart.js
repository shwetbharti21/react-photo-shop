import React, { createContext, useState } from "react";
export const PhotoCartContext = createContext();

const PhotoCartContextProvider = (props) => {
  const [selectedPhoto, setSelectedPhoto] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (selectedPhoto) => {
    setCartItems((prevCartItem) => {
      return [...prevCartItem, selectedPhoto];
    });
    alert("Product Successfully Added");
  };

  const removeCartElement = (selectedPhoto) => {
    const removedElement = cartItems.filter((item) => {
      return item.id !== selectedPhoto.id;
    });
    setCartItems(() => {
      return [...removedElement];
    });
  };

  return (
    <PhotoCartContext.Provider
      value={{
        selectedPhoto,
        setSelectedPhoto,
        addToCart,
        cartItems,
        setCartItems,
        removeCartElement,
      }}
    >
      {props.children}
    </PhotoCartContext.Provider>
  );
};

export default PhotoCartContextProvider;
