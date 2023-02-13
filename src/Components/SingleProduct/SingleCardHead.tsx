import { Star } from "@mui/icons-material";
import { Box, Button, Rating, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleProducts } from "../../api";

export default function SingleCardHead() {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState<any>();
  useEffect(() => {
    const getProduct = async () => {
      const response = await getSingleProducts(id);
      setSingleProduct(response);
    };
    getProduct();
  }, [id]);

  if (!singleProduct) return <p>Loading...</p>;
  return (
    <Box
      display="flex"
      alignItems="start"
      flexDirection="column"
      justifyContent="space-between"
      bgcolor={"#fff"}
      width="100%"
      padding={"4rem 1rem"}
    >
      <Typography fontWeight="700" fontSize="24px" color="#11142D">
        Grocery &gt; {singleProduct?.category} &gt; {singleProduct?.title}
      </Typography>
      <Box
        display="flex"
        mt="2rem"
        alignItems="center"
        justifyContent="space-between"
      >
        <img
          src={singleProduct.image}
          alt={singleProduct.title}
          style={{ width: "608px", height: "552px" }}
        />
        <Box
          display="flex"
          mt="2rem"
          alignItems="start"
          flexDirection="column"
          justifyContent="space-between"
          width="50%"
        >
          <Typography
            variant="h1"
            component="h1"
            fontWeight="700"
            fontSize="40px"
            color="#333"
          >
            {" "}
            {singleProduct.title}
          </Typography>
          <Rating
            name="text-feedback"
            value={singleProduct.rating.rate}
            readOnly
            precision={0.5}
            emptyIcon={<Star style={{ opacity: 0.55 }} fontSize="inherit" />}
          />
          <span style={{ fontWeight: 700, fontSize: "62px", color: "#F86338" }}>
            {singleProduct.price}
          </span>
          <Typography
            variant="h3"
            component="h3"
            fontWeight="700"
            fontSize="24px"
            color="#11142D"
          ></Typography>
          <Typography fontWeight="400" fontSize="16px" color="#666">
            {singleProduct.description}
          </Typography>
          <Box
            display="flex"
            mt="2rem"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
          >
            <Typography>Quantity</Typography>
            <input type="number" />
            <Typography fontWeight="700" fontSize="16px" color="#f86338">
              Add note
            </Typography>
          </Box>
          <Box 
            display="flex"
            mt="2rem"
            alignItems="center"
            justifyContent="space-between"
            width="100%">
            <Typography>Sub Total</Typography>
            <span>$10</span>
          </Box>
          <Box 
            display="flex"
            mt="2rem"
            alignItems="center"
            justifyContent="space-between"
            width="40%">
            <Button
              variant="contained"
              style={{
                padding: "1rem",
                backgroundColor: "#F86338",
                borderRadius: "8px",
                marginRight: "1rem",
              }}
            >
              Add to Cart
            </Button>
            <Button
              style={{
                padding: "1rem",
                color: "#F86338",
                borderRadius: "8px",
              }}
              variant="outlined"
            >
              Watch
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
