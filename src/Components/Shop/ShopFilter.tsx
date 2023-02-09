import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import ShopCads from "./shopCads";
import SideBar from "./SideBar";
import { getProductsSpecificCategory, limitProduct } from "../../api";
import { LimitProduct, Product } from "../../interfaces";

export default function ShopFilter() {
  const [limit, setLimit] = useState<number>(8);
  const [productList, setProductList] = useState<any>();
  const [categoryType, setCategoryType] = useState<string>("");
  useEffect(() => {
    const getData = async () => {
      if (!categoryType) {
        const response = await limitProduct(limit);
        setProductList(response);
      } else {
        const response = await getProductsSpecificCategory(categoryType);
        setProductList(response);
      }
    };
    getData();
  }, [limit, categoryType]);
  if (!productList?.length) return <p>Loading ...</p>;
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="space-around"
    >
      <Box
        width="100%"
        display="flex"
        alignItems="start"
        justifyContent="space-around"
      >
        <SideBar setCategoryType={setCategoryType} categoryType={categoryType} />
        <ShopCads productList={productList} />
      </Box>

      <Button
        style={{
          backgroundColor: "#F86338",
          color: "#fff",
          margin: "2rem",
          marginLeft: "24rem",
          padding: "1rem",
        }}
        onClick={() => setLimit((prevState) => prevState + 8)}
      >
        Find out More
      </Button>
    </Box>
  );
}
