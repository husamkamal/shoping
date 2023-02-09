import React from "react";
import Header from "../../Components/Global/Header";
import Container from "@mui/material/Container";
import "./style.css";
import HeroSection from "../../Components/Global/HeroSection";
import Premium from "../../Components/Home/Premium";
import TopItems from "../../Components/Global/TopItems";
import BrandStory from "../../Components/Home/BrandStory";
import NewsLetters from "../../Components/Global/NewsLetters";
const Home = () => {
  return (
    <Container className="home-container">
      <Header />
      <HeroSection />
      <Premium />
      <TopItems />
      <BrandStory />
      <NewsLetters />
    </Container>
  );
};

export default Home;
