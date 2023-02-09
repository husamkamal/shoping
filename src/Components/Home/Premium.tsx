import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import PremiumCar from "./PremiumCar";

export default function Premium() {
  const [tap, setTap] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTap(newValue);
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="end"
    >
      <Typography
        variant="h3"
        component="h3"
        fontWeight="700"
        fontSize={{xs:"18px",lg:"48px"}}
        lineHeight="120%"
        letterSpacing="0.005em"
        color="#11142D"
        margin="3rem"
      >
        Our Premium Collection
      </Typography>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{ width: "90%" }}
      >
        <Tabs
          className="tabs"
          onChange={handleChange}
          value={tap}
          aria-label="Tabs where selection follows focus"
          selectionFollowsFocus
        >
          <Tab sx={{ "&:focus": { color: "#F86338" } }} label="All Products" />
          <Tab
            sx={{ "&:focus": { color: "#F86338" } }}
            label="Coats & Jacket"
          />
          <Tab sx={{ "&:focus": { color: "#F86338" } }} label="Dressed" />
          <Tab sx={{ "&:focus": { color: "#F86338" } }} label="Playsuit" />
          <Tab sx={{ "&:focus": { color: "#F86338" } }} label="Short" />
          <Tab sx={{ "&:focus": { color: "#F86338" } }} label="Skirt" />
          <Tab sx={{ "&:focus": { color: "#F86338" } }} label="T-Shirt" />
        </Tabs>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="90%"
        flexWrap="wrap"
      >
        <PremiumCar />
        <PremiumCar />
        <PremiumCar />
        <PremiumCar />
        <PremiumCar />
        <PremiumCar />
      </Box>
      <Button
        style={{ backgroundColor: "#F86338", color: "#fff", margin: "2rem" }}
      >
        Find out More
      </Button>
    </Box>
  );
}
