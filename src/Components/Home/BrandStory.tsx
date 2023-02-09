import { Box, Button, Typography } from "@mui/material";
import React from "react";

export default function BrandStory() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-around"
      width="90%"
      height="100vh"
      flexDirection={{ xs: "column", lg: "row" }}
    >
      <Box
        height="100%"
        width={{ xs: "90%", lg: "45%" }}
        bgcolor="#E2E2EA"
      ></Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="start"
        justifyContent="space-between"
        width={{ xs: "90%", lg: "45%" }}
        height="50%"
      >
        <Typography
          variant="h2"
          component="h2"
          fontWeight="700"
          fontSize=" 48px"
          lineHeight="120%"
          letterSpacing="0.005em"
          color=" #11142D"
          width="18rem"
        >
          Story about Our Brand
        </Typography>
        <Typography
          fontWeight="400"
          fontSize=" 14px"
          lineHeight="125%"
          letterSpacing="0.005em"
          color=" #9A9AB0"
        >
          Develop a website by finding a product identity that has value and
          branding to become a characteristic of a company. We will also
          facilitate the business marketing of these products with our SEO
          experts so that they become a ready-to-use website and help sell a
          product from the company Develop a website by finding a product
          identity that has value and branding to become a characteristic of a
          company. We will also facilitate the business marketing of these
          products with our SEO experts so that they become a ready-to-use
          website and help sell a product from the company
        </Typography>
        <Button variant="outlined" style={{ color: "#F86338" }}>
          outlined
        </Button>
      </Box>
    </Box>
  );
}
