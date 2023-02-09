import { Container } from '@mui/material'
import React from 'react'
import Header from '../Components/Global/Header'
import HeroSection from '../Components/Global/HeroSection'
import Premium from '../Components/Home/Premium'
import NewsLetters from '../Components/Global/NewsLetters'

export default function Gallary() {
  return (
    <Container className="home-container">
        <Header />
        <HeroSection />
        <Premium />
        <NewsLetters />
    </Container>
  )
}
