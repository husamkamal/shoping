import { Box, Typography } from "@mui/material";
import React from "react";

export default function TopItemCard() {
  return (
    <Box
      height="20rem"
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="end"
      bgcolor="#E2E2EA"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-around"
        height="30%"
      >
        <Typography
          variant="h4"
          component="h4"
          fontWeight="700"
          fontSize="24px"
          lineHeight=" 120%"
          textAlign="center"
          letterSpacing="0.005em"
          color="#11142D"
        >
          Tracksuit Hyped{" "}
        </Typography>
        <Typography
          variant="h6"
          component="span"
          fontWeight="400"
          fontSize="14px"
          lineHeight=" 130%"
          textAlign="center"
          letterSpacing="0.008em"
          color="#9A9AB0"
        >
          Apple Cherry{" "}
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="5rem"
        >
          <span style={{ color: "#F86338" }}>$384</span>
          <span style={{ color: "#9A9AB0" }}>$454</span>
        </Box>
      </Box>
    </Box>
  );
}
