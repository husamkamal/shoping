import { Star } from "@mui/icons-material";
import { Box, Rating, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
export default function Card({
  src,
  title,
  rating,
  price,
  id,
}: {
  src: string;
  rating: number;
  title: string;
  price: string;
  id: number;
}) {
  return (
    <Link to={`/shop/${id}`} style={{ textDecoration: "none" }}>
      <Box
        width="400px"
        height="375px"
        style={{ backgroundColor: `#FFFFFF` }}
        borderRadius="6px"
        display="flex"
        flexDirection="column"
        alignItems="canter"
        justifyContent="space-around"
        mt="1rem"
      >
        <img
          src={src}
          alt="titles"
          style={{ width: "400px", height: "30%", objectFit: "contain" }}
        />
        <Box
          width="400px"
          height="30%"
          style={{ backgroundColor: `#FFFFFF` }}
          borderRadius="6px"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexDirection="column"
        >
          <Typography
            variant="h2"
            component="h2"
            fontWeight=" 700"
            fontSize=" 24px"
            lineHeight=" 120%"
            textAlign="center"
            letterSpacing=" 0.005em"
            color=" #11142D"
          >
            {title}
          </Typography>
          <Rating
            name="text-feedback"
            value={rating}
            readOnly
            precision={0.5}
            emptyIcon={<Star style={{ opacity: 0.55 }} fontSize="inherit" />}
          />
          <span style={{ color: "#F3692E" }}>${price}</span>
        </Box>
      </Box>
    </Link>
  );
}
