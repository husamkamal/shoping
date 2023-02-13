import {
  ArrowForwardIosOutlined,
  FilterAltOutlined,
  Search,
} from "@mui/icons-material";
import { Box, Slider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
// import { allCategoryProduct, allCategoryWithProduct } from "../../interfaces";
import { allCategory } from "../../api";

export default function SideBar({
  setCategoryType,
  categoryType,
  setSearch,
  search,
  price,
  setPrice,
  productList,
}: {
  setCategoryType: React.Dispatch<React.SetStateAction<string>>;
  categoryType: string;
  search: string;
  setSearch: React.Dispatch<any>;
  price: number;
  setPrice: React.Dispatch<any>;
  productList: any;
}) {
  const [maxPrice, setMaxPrice] = useState<number>(100);
  const [category, setCategory] = useState<any>([]);
  useEffect(() => {
    const getCategory = async () => {
      const response = await allCategory();
      setCategory(response);
    };
    getCategory();
  }, []);
  useEffect(() => {
    const maxPriceFilter = productList?.map((e: any) => {
      return e.price;
    });
    setMaxPrice(Math.max(...maxPriceFilter));
  }, []);
  const handleChange = (event: any, newValue: any) => {
    if (typeof newValue === "number") {
      setPrice(newValue);
    }
  };
  if (!category?.length) return <p>Loading ...</p>;
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="space-between"
      margin="3rem 0"
      width="20%"
    >
      <Box
        width="100%"
        borderRadius="4px"
        padding=".7rem"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        border="1px solid #11142D"
        color="#9A9AB0"
      >
        <input
          type="text"
          className="nav-search-input"
          placeholder="Search what you need"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Search />
      </Box>
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="space-between"
        width="100%"
        mt="3rem"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <Typography
            fontWeight=" 700"
            fontSize=" 24px"
            lineHeight=" 120%"
            letterSpacing=" 0.005em"
            color=" #11142D"
          >
            Price
          </Typography>
          <FilterAltOutlined style={{ color: " #11142D" }} />
        </Box>
        <Slider
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="auto"
          step={10}
          max={maxPrice || 100}
          min={5}
          value={price}
          onChange={handleChange}
          style={{ margin: "1rem 0" }}
        />
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <Typography
            fontWeight=" 400"
            fontSize=" 14px"
            lineHeight=" 120%"
            letterSpacing=" 0.005em"
            color=" #11142D"
          >
            Range
          </Typography>
          <Typography
            fontWeight=" 400"
            fontSize=" 14px"
            lineHeight=" 120%"
            letterSpacing=" 0.005em"
            color=" #11142D"
          >
            $5-${Number(maxPrice)}
          </Typography>
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems="start"
        flexDirection="column"
        justifyContent="space-between"
        width="100%"
        mt="3rem"
      >
        <Typography
          fontWeight=" 700"
          fontSize=" 24px"
          lineHeight=" 120%"
          letterSpacing=" 0.005em"
          color=" #11142D"
        >
          Product Categories
        </Typography>
        {category.map((e: string) => (
          <Box
            key={e}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            flexDirection="column"
            width="100%"
            sx={{ cursor: "pointer" }}
            onClick={() => setCategoryType(e)}
          >
            <Box
              display="flex"
              alignItems="center"
              width="100%"
              justifyContent="space-between"
              mt="1.5rem"
            >
              <Typography
                fontWeight=" 500"
                fontSize=" 18px"
                lineHeight=" 120%"
                letterSpacing=" 0.005em"
                color=" #11142D"
              >
                {e}{" "}
              </Typography>
              <ArrowForwardIosOutlined />
            </Box>
          </Box>
        ))}
      </Box>
      <Box
        display="flex"
        alignItems="start"
        flexDirection="column"
        justifyContent="space-between"
        width="100%"
        mt="3rem"
      >
        <Typography
          fontWeight=" 700"
          fontSize=" 24px"
          lineHeight=" 120%"
          letterSpacing=" 0.005em"
          color=" #11142D"
        >
          Featured Product
        </Typography>
        <Box
          display="flex"
          alignItems="start"
          justifyContent="space-between"
          flexDirection="column"
          width="100%"
        >
          <Box
            display="flex"
            alignItems="center"
            width="50%"
            justifyContent="space-between"
            mt="1.5rem"
            height="80px"
          >
            <Box
              width="80px"
              height="80px"
              bgcolor="#E2E2EA"
              borderRadius="6px"
            ></Box>
            <Box
              display="flex"
              alignItems="start"
              width="30%"
              flexDirection="column"
              justifyContent="space-around"
              height="100%"
            >
              <Typography
                fontWeight=" 500"
                fontSize=" 18px"
                lineHeight=" 120%"
                letterSpacing=" 0.005em"
                color=" #11142D"
                width="10rem"
              >
                Tropical Playsuit{" "}
              </Typography>
              <span style={{ color: "#F86338" }}>$100</span>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
