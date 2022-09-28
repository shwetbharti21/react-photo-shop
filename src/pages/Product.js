import React, { useContext, useEffect } from "react";
import { PhotoCartContext } from "../context/photoCart";
import { sizeData } from "../data/price";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

function Product() {
  const { selectedPhoto, setSelectedPhoto, addToCart } =
    useContext(PhotoCartContext);

  const handleProductSelection = (e) => {
    const filterData = sizeData.filter((size) => {
      return size.size === e.target.value;
    });
    setSelectedPhoto((selectedPhoto) => {
      return {
        ...selectedPhoto,
        ...filterData[0],
      };
    });
  };

  return (
    <Card sx={{ maxWidth: 500, mx: "auto" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={`https://picsum.photos/id/${selectedPhoto.id}/400/400`}
          alt={selectedPhoto.author}
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="div">
            Author: {selectedPhoto.author}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <label>Choose a size:</label>
        <br />
        <select id="select" onChange={(e) => handleProductSelection(e)}>
          <option>Select</option>
          {sizeData.map((size) => {
            return (
              <option
                onSubmit={(e) => handleProductSelection(e)}
                key={size.sizeId}
                value={size.size}
              >
                {size.size}
              </option>
            );
          })}
          ;
        </select>
      </CardActions>
      <CardActions>
        <Button onClick={() => addToCart(selectedPhoto)}>Add to cart</Button>
      </CardActions>
    </Card>
  );
}

export default Product;
