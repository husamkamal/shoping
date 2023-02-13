import React from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { AirportShuttleOutlined, CallOutlined } from "@mui/icons-material";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import SearchIcon from "@mui/icons-material/Search";
import {  Link } from "react-router-dom";
const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
export default function Header() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      flexDirection="column"
      flexWrap="wrap"
    >
      <Box
        padding="1rem"
        width="100vw"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        bgcolor="#fff"
        className="nav-top"
        flexWrap="wrap"
        flexDirection={{xs: "column", lg: "row"}}
      >
        <Typography width="45%" color="#F86338" fontWeight="700" fontSize="39px">
          Dealerz.
        </Typography>
        <Box
          width={{xs:"100%", lg: "30%"}}
          display="flex"
          flexDirection={{ xs: "column", lg: "row" }}
          alignItems="center"
          justifyContent="space-between"
          flexWrap="wrap"
        >
          <Box
            width={{ xs: "45%", lg: "32%" }}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            flexWrap="wrap"
          >
            <CallOutlined style={{ color: "#11142D" }} />
            <Typography color="#11142D" fontSize="16px" fontWeight="500">
              Call Center
            </Typography>
          </Box>
          <Box
            width={{ xs: "100%", lg: "50%" }}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            flexWrap="wrap"
          >
            <AirportShuttleOutlined style={{ color: "#11142D" }} />
            <Typography color="#11142D" fontSize="16px" fontWeight="500">
              Shipping & Returns
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* <SearchBar /> */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="91%"
        padding="1rem"
        flexWrap="wrap"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="25%"
          flexWrap="wrap"
        >
          <Link to="/shop">
          <Typography
            variant="h4"
            component="h4"
            fontWeight="500"
            fontSize="16px"
            color="#11142D"
          >
            Shop
          </Typography>
          </Link>
          <Typography
            variant="h4"
            component="h4"
            fontWeight="500"
            fontSize="16px"
            color="#11142D"
          >
            Promo
          </Typography>
          <Typography
            variant="h4"
            component="h4"
            fontWeight="500"
            fontSize="16px"
            color="#11142D"
          >
            About
          </Typography>
          <Typography
            variant="h4"
            component="h4"
            fontWeight="500"
            fontSize="16px"
            color="#11142D"
          >
            Blog
          </Typography>
        </Box>
        <Box
          width="40%"
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
            placeholder="Search what you need"
          />
          <SearchIcon />
        </Box>
        <Box
          display="flex"
          width="25%"
          alignItems="center"
          justifyContent="space-between"
          flexWrap="wrap"
        >
          <IconButton aria-label="cart">
            <FavoriteBorderIcon style={{ color: "#000000" }} />
          </IconButton>
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={3} style={{ color: "#F86338" }}>
              <LocalGroceryStoreOutlinedIcon style={{ color: "#000000" }} />
            </StyledBadge>
          </IconButton>
          <IconButton aria-label="cart">
            <PersonOutlineIcon style={{ color: "#000000" }} />
          </IconButton>
          <IconButton aria-label="cart">
            <NotificationsNoneIcon style={{ color: "#000000" }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
