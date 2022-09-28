import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Pagination from "@mui/material/Pagination";
import { PhotoCartContext } from "../context/photoCart";

import Box from "@mui/material/Box";

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const { setSelectedPhoto } = useContext(PhotoCartContext);

  useEffect(() => {
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=25`)
      .then((response) => {
        response
          .json()
          .then((res) => {
            setImages(res);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  //Handle image click to navigate to product page
  const handleImage = (image) => {
    setSelectedPhoto({ ...image });
    navigate("/Product");
  };

  return (
    <>
      <Box>
        {images.length > 0 && (
          <>
            <ImageList sx={{ width: 1000 }} cols={5} rowHeight={200}>
              {images.map((img) => (
                <ImageListItem
                  sx={{
                    "&:hover": {
                      backgroundColor: "primary.main",
                      opacity: [0.9, 0.8, 0.7],
                    },
                  }}
                  key={img.id}
                >
                  <img
                    onClick={() => handleImage(img)}
                    src={`https://picsum.photos/id/${img.id}/300/300`}
                    alt=""
                  />
                </ImageListItem>
              ))}
            </ImageList>
            <Pagination
              hidePrevButton
              hideNextButton
              sx={{ ml: 25 }}
              count={5}
              size="large"
              onClick={(e) => setPage(e.target.textContent)}
            />
          </>
        )}
      </Box>
    </>
  );
};

export default ImageGallery;
