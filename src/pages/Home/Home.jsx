import React from 'react'
import Header from '../Header/Header'
import Carousel from '../../components/Carousel/Carousel'
import { CardContainer, Container } from './styles'

function Home() {
  return (
    <>
      <Header />
      <Container>
        <CardContainer>
          <Carousel />
        </CardContainer>
      </Container>
    </>
  )
}

export default Home
