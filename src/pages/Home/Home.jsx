import React, { useContext, useEffect } from 'react'
import Header from '../Header/Header'
import CarouselApp from '../../components/Carousel/Carousel'
import { CardContainer, Container } from './styles'
import { CartContext } from '../../Contexts/CartContext'

function Home() {
  const { productId, setProductId } = useContext(CartContext)

  function handleSetProductID() {
    const id = localStorage.getItem('ID')

    setProductId(id)

    console.log(`PorductID: ${productId}`)
  }

  useEffect(() => {
    handleSetProductID()
  }, [])

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
