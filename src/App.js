import "./App.css";
import ImageGallery from "../src/pages/ImageGallery";
import Product from "../src/pages/Product";
import Cart from "../src/pages/Cart";
import Box from "@mui/material/Box";
import { Routes, Route } from "react-router-dom";
import PhotoCartContextProvider from "../src/context/photoCart";

function App() {
  return (
    <>
      <PhotoCartContextProvider>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 4,
          }}
        >
          <h1> Photo Shop</h1>
          <Cart />
        </Box>
        <Routes>
          <Route path="/" element={<ImageGallery />}></Route>
          <Route path="/product" element={<Product />}></Route>
        </Routes>
      </PhotoCartContextProvider>
    </>
  );
}

export default App;
