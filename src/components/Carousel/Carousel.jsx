/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
// import Carousel from 'react-elastic-carousel'
import { Carousel } from 'react-responsive-carousel'
// import PC1 from '../../assets/pc-1.jpg'
// import PC2 from '../../assets/pc-2.jpg'
// import PC3 from '../../assets/pc-3.jpg'
import { ContainerCarousel } from './style'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
// import { useHistory } from 'react-router-dom'
import api from '../../services/api'

function CarouselApp() {
  const [productsList, setProductList] = useState([])

  async function getAll() {
    const { data } = await api.get('/')
    setProductList(data)

    console.log(productsList)
  }

  useEffect(() => {
    getAll()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ContainerCarousel>
      <Carousel
        autoPlay
        interval={3000}
        showThumbs={false}
        stopOnHover
        showArrows
        infiniteLoop
        transitionTime={1200}
      >
        {productsList.map((item) => (
          <div key={item._id}>
            <img
              src={`https://ecomerce-api.herokuapp.com/files/${item.image}`}
              alt="f"
              style={{ width: '120%', height: '220px' }}
            />
          </div>
        ))}
      </Carousel>
    </ContainerCarousel>
  )
}

export default CarouselApp
