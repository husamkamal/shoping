import { Container } from '@mui/material'
import React from 'react'
import SingleCardHead from '../../Components/SingleProduct/SingleCardHead'
import Header from '../../Components/Global/Header'
import TopItems from '../../Components/Global/TopItems'
import Footer from '../../Components/Global/Footer'

export default function SingleProduct() {
  return (
    <Container className="home-container"> 
    <Header />
    <SingleCardHead />
    <TopItems />
    <Footer />
    </Container>
  )
}
