import { Box } from "@mui/material";
import React from "react";
import Card from "./Card";
import { Product } from "../../interfaces";

export default function ShopCads({
  filterData,
  isLoading,
}: {
  filterData: any;
  isLoading: boolean;
}) {
  if (isLoading) return <p>Loading ...</p>;
  return (
    <Box
      minWidth="70%"
      width="70%"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      margin="2rem 0"
      flexWrap="wrap"
    >
      {filterData?.length > 0 ? (
        filterData?.map((e: Product) => (
          <Card
            key={e.id}
            src={e.image}
            title={e.title}
            id={e.id}
            rating={e.rating.rate}
            price={e.price}
          />
        ))
      ) : (
        <p>Not Fount</p>
      )}
    </Box>
  );
}
