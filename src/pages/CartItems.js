import React, { useContext } from "react";
import Paper from "@mui/material/Paper";
import { PhotoCartContext } from "../context/photoCart";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";

function CartItems() {
  const { cartItems, removeCartElement } = useContext(PhotoCartContext);
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    width: "75%",
    display: "flex",
    justifyContent: "space-between",
    color: theme.palette.text.secondary,
  }));
  return (
    <>
      <Box
        sx={{
          height: 400,
          width: 400,
          position: "absolute",
          zIndex: 4,
          right: 0,
          margin: 7,
          mr: 0,
          ml: -50,
          backgroundColor: "#fff",
        }}
      >
        {!cartItems.length ? (
          <>Cart is Empty</>
        ) : (
          <Stack spacing={1}>
            {cartItems.map((item) => {
              return (
                <Item key={item.id}>
                  <img
                    src={`https://picsum.photos/id/${item.id}/50/`}
                    alt={item.author}
                  />
                  <DeleteTwoToneIcon
                    sx={{ ml: -3 }}
                    onClick={() => removeCartElement(item)}
                  />
                  <label>{item.size}</label>
                  <label>${item.price}</label>
                </Item>
              );
            })}
            <Item sx={{ justifyContent: "flex-end" }}>
              {`Total:$ ${cartItems.reduce((totalPrice, item) => {
                return (totalPrice = totalPrice + item.price);
              }, 0)}`}
            </Item>
          </Stack>
        )}
      </Box>
    </>
  );
}

export default CartItems;
