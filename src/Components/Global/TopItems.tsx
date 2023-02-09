import { Box, Typography } from "@mui/material";
import React from "react";
import TopItemSlider from "./TopItemSlider";

export default function TopItems() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-around"
      bgcolor="#fff"
      height="100vh"
    >
      <Typography
        variant="h3"
        component="h3"
        fontWeight="700"
        fontSize="48px"
        lineHeight="120%"
        letterSpacing="0.005em"
        color="#11142D"
      >
        Top Items{" "}
      </Typography>
      <Typography
        fontWeight="4700"
        fontSize="16px"
        lineHeight="120%"
        letterSpacing="0.005em"
        color="#515151"
        width="50%"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.{" "}
      </Typography>
      <TopItemSlider />
    </Box>
  );
}
