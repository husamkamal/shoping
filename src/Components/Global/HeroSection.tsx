import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Images from "../../Assets";
export default function HeroSection() {
  return (
    <Box width="100%" height={{xs:"60vh",lg:"100vh"}} style={{ backgroundColor: "#fff" }}>
      <Box
        width="100%"
        height="100%"
        display="flex"
        flexDirection="column"
        alignItems="end"
        justifyContent="center"
        style={{ backgroundImage: `url(${Images.heroImg})` }}
      >
        <Box
          width="50%"
          display="flex"
          flexDirection="column"
          alignItems="start"
          justifyContent="space-between"
          height="50%"
        >
          <Typography
            width="80%"
            variant="h1"
            component="h1"
            fontWeight="700"
            fontSize={{xs:"18px",lg:"64px"}}
            lineHeight="120%"
            letterSpacing="0.003em"
            color="#11142D"
          >
            Your Premium Sound, Unplugged!
          </Typography>
          <Typography
            fontWeight="400"
            fontSize="16px"
            lineHeight="125%"
            letterSpacing="0.005em"
            color="#515151"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </Typography>
          <Button style={{ backgroundColor: "#F86338", color: "#fff" }}>
            Find out More
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
