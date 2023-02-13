import React from "react";
import "./style.css";
import { Container } from "@mui/material";
import Header from "../../Components/Global/Header";
import HeroSection from "../../Components/Global/HeroSection";
import NewsLetters from "../../Components/Global/NewsLetters";
import ShopFilter from "../../Components/Shop/ShopFilter";
export default function Shop() {
  return (
    <Container className="home-container">
      <Header />
      <HeroSection />
      <ShopFilter />
      <NewsLetters />
    </Container>
  );
}
