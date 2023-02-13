import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import ShopCads from "./shopCads";
import SideBar from "./SideBar";
import { getProductsSpecificCategory, limitProduct } from "../../api";

export default function ShopFilter() {
  const [limit, setLimit] = useState<number>(8);
  const [productList, setProductList] = useState<any>();
  const [categoryType, setCategoryType] = useState<string>("");
  const [search, setSearch] = useState<any>("");
  const [price, setPrice] = useState<any>(50);
  const [filterData, setFilterData] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      if (!categoryType) {
        const response = await limitProduct(limit);
        setProductList(response);
        setFilterData(response);
        setIsLoading(false);
      } else {
        const response = await getProductsSpecificCategory(categoryType);
        setProductList(response);
        setIsLoading(false);
      }
    };
    getData();
  }, [limit, categoryType]);
  useEffect(() => {
    if (search.length > 0) {
      const searchFilter = productList?.filter((e: any) => {
        return e.title.includes(search);
      });
      setFilterData(searchFilter);
    }
  }, [search]);
  useEffect(() => {
    const productPrice = productList?.filter((e: any) => {
      return e.price < price;
    });
    setFilterData(productPrice);
  }, [price]);
  if (!productList?.length) return <p>Loading ...</p>;

  return (
    <Box
      width="100%"
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
        <SideBar
          setCategoryType={setCategoryType}
          categoryType={categoryType}
          setSearch={setSearch}
          search={search}
          setPrice={setPrice}
          price={price}
          productList={productList}
        />
        <ShopCads isLoading={isLoading} filterData={filterData} />
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
