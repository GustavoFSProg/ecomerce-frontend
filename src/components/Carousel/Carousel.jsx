import React, { Component } from 'react'
// import Carousel from 'react-elastic-carousel'
import { Carousel } from 'react-responsive-carousel'
import PC1 from '../../assets/pc-1.jpg'
import { ContainerCarousel } from './style'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

class App extends Component {
  state = {
    items: [
      { id: 1, embed: `${PC1}` },
      { id: 2, embed: `${PC1}` },
      { id: 3, embed: `${PC1}` },
      { id: 4, embed: `${PC1}` },
    ],
  }

  render() {
    const { items } = this.state
    return (
      <ContainerCarousel>
        <Carousel
          autoPlay
          interval={3000}
          showThumbs={false}
          stopOnHover
          showArrows
          infiniteLoop
          transitionTime={1000}
        >
          {items.map((item) => (
            <div key={item.id}>
              <img src={item.embed} alt="f" style={{ width: '120%', height: '220px' }} />
            </div>
          ))}
        </Carousel>
      </ContainerCarousel>
    )
  }
}

export default App
