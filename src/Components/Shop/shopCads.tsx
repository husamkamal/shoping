import { Box } from "@mui/material";
import React from "react";
import Card from "./Card";
import { Product } from "../../interfaces";

export default function ShopCads({
  productList,
}: {
  productList: any;
}) {
  console.log(productList);
  return (
    <Box
      width="70%"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      margin="2rem 0"
      flexWrap="wrap"
    >
      {productList?.map((e:Product) => (
        <Card key={e.id} src={e.image} title={e.title} id={e.id} rating={e.rating.rate} price={e.price} />
      ))}
    </Box>
  );
}
