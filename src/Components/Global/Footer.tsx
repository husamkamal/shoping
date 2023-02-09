import { ArrowForward } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Box
      width="100%"
      bgcolor="#fff"
      display="flex"
      alignItems="center"
      height="60vh"
      justifyContent="space-around"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="50%"
      >
        <Box width="400px" height="360px" bgcolor="#E2E2EA"></Box>
        <Box display="flex" flexDirection="column" width="100%" alignItems="center" justifyContent="space-between">
          <Typography
            width="45%"
            color="#F86338"
            fontWeight="700"
            fontSize="39px"
          >
            Dealerz.
          </Typography>
          <Typography
            width="45%"
            color="#F86338"
            fontWeight="700"
            fontSize="20px"
          >
            Privacy Policy.
          </Typography>
          <Typography
            width="45%"
            color="#F86338"
            fontWeight="700"
            fontSize="20px"
          >
            Terms and Condition{" "}
          </Typography>
        </Box>
      </Box>
      <Box height="100%" display="flex" alignItems="start" width="30%" justifyContent="space-around">
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
