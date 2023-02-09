import { ArrowCircleRightOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";

export default function NewsLetters() {
  return (
    <Box
      width={{ xs: "100%", lg: "90%" }}
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="space-around"
      height={{ xs: "50vh", lg: "60vh" }}
      bgcolor="#fff"
    >
      <Typography
        variant="h3"
        component="h3"
        fontWeight="700"
        fontSize="48px"
        lineHeight="120%"
        letterSpacing="0.005em"
        color="#11142D"
        margin="3rem"
        width={{ xs: "90%", lg: "50%" }}
      >
        Join Our News Letters
      </Typography>
      <Typography
        fontWeight="4700"
        fontSize="16px"
        lineHeight="120%"
        letterSpacing="0.005em"
        color="#515151"
        width={{ xs: "90%", lg: "50%" }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.{" "}
      </Typography>
      <Box
        width={{ xs: "90%", lg: "40%" }}
        bgcolor="#fff"
        borderRadius="4px"
        padding=".7rem"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <input
          type="text"
          className="nav-search-input"
          placeholder="Insert your mail here"
        />
        <Box
          height="152%"
          width="2.5rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bgcolor="#F86338"
          borderRadius="10px"
        >
          <ArrowCircleRightOutlined style={{ color: "#fff" }} />
        </Box>
      </Box>
    </Box>
  );
}
