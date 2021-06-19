import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import Header from '../Header/Header'
import { Container, DivListagemProdutos } from './styles'

function Products() {
  const [productsList, setProductsList] = useState([])

  async function getAllProducts() {
    const { data } = await api.get('/')
    setProductsList(data)
    return data
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <>
      <Header />
      <Container>
        <DivListagemProdutos>
          {productsList.map((item) => (
            <ul
              key={item.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <li style={{ padding: '20px' }}>
                <img
                  alt="product"
                  width="120"
                  height="98"
                  src={`https://ecomerce-api.herokuapp.com/files/${item.image}`}
                />
              </li>
              <li>
                <span>Titulo do Produto</span>
                <br />
                {item.title}
              </li>
              <li>
                <span>Preço</span>
                <br />
                {item.price}
              </li>
            </ul>
          ))}
        </DivListagemProdutos>
      </Container>
    </>
  )
}

export default Products
