import { ArrowForward } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";

export default function PremiumCar() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="end"
      width="400px"
      height="500px"
      mt="1rem"
      paddingBottom="2rem"
      bgcolor="#FFFFFF"
    >
      <Box
        height="40%"
        display="flex"
        flexDirection="column"
        alignItems="start"
        justifyContent="space-between"
      >
        <Typography
          variant="h5"
          component="h5"
          fontWeight="700"
          fontSize="16px"
          lineHeight="120%"
          letterSpacing="0.005em"
          color="#9A9AB0"
        >
          Category Dress
        </Typography>
        <Typography
          variant="h3"
          component="h3"
          fontWeight="700"
          fontSize="48px"
          lineHeight="120%"
          letterSpacing="0.005em"
          color="#11142D"
        >
          Tropical Suit{" "}
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="50%"
          bgcolor=" #F86338"
          width="40px"
          height="40px"
        >
          <ArrowForward style={{ color: "#fff" }} />
        </Box>
      </Box>
    </Box>
  );
}
