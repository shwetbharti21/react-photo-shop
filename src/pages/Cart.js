import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartItems from "./CartItems";

export default function Cart() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <>
      <IconButton
        onClick={() => {
          setIsCartOpen(!isCartOpen);
        }}
        aria-label="cart"
      >
        <ShoppingCartIcon />
      </IconButton>
      {isCartOpen && <CartItems />}
    </>
  );
}
