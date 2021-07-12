import React from 'react'
import Header from '../Header/Header'
import CarouselApp from '../../components/Carousel/Carousel'
import { CardContainer, Container } from './styles'

function Home() {
  return (
    <>
      <Header />
      <Container>
        <CardContainer>
          <CarouselApp />
        </CardContainer>
      </Container>
    </>
  )
}

export default Home
