import { Box, Typography } from "@mui/material";
import React from "react";
import OurAchievementCar from "./OurAchievementCar";

export default function OurAchievement() {
  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-around"
      flexWrap="wrap"
      width="90%"
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
      >
        Our Achievement
      </Typography>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
      >
        <OurAchievementCar />
        <OurAchievementCar />
        <OurAchievementCar />
        <OurAchievementCar />
        <OurAchievementCar />
      </Box>
    </Box>
  );
}
