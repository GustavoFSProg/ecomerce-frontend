import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import Header from '../Header/Header'
import { Container, ProductContainer, DivListagemProdutos } from './styles'

function Profile() {
  const [productsList, setProductsList] = useState([])

  const id = localStorage.getItem('ID')

  async function getOneProducts() {
    const { data } = await api.get(`/${id}`)
    setProductsList(data)
    return data
  }

  useEffect(() => {
    getOneProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header />
      <Container>
        <br />
        <DivListagemProdutos>
          <ProductContainer>
            <ul
              key={productsList.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                listStyle: 'none',
                paddingRight: '10px',
              }}
            >
              <li style={{ padding: '20px', marginLeft: '-31px' }}>
                <img
                  alt="product"
                  width="120"
                  height="98"
                  src={`https://ecomerce-api.herokuapp.com/files/${productsList.image}`}
                />
              </li>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  listStyle: 'none',
                  // paddingRight: '10px',
                }}
              >
                <li
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    listStyle: 'none',
                    marginLeft: '-30px',
                  }}
                >
                  <span
                    style={{
                      fontWeight: 'bold',
                      fontFamily: 'Arial',
                      fontSize: '18px',
                      color: '#004f99',
                    }}
                  >
                    Produto:
                  </span>

                  <span
                    style={{
                      marginTop: '4px',
                      fontFamily: 'Arial',
                      fontSize: '16px',
                      color: '#005cb3',
                    }}
                  >
                    {productsList.title}
                  </span>

                  <span
                    style={{
                      fontWeight: 'bold',
                      fontFamily: 'Arial',
                      fontSize: '18px',
                      color: '#004f99',
                    }}
                  >
                    Descrição:
                  </span>

                  <span
                    style={{
                      marginTop: '4px',
                      fontFamily: 'Arial',
                      fontSize: '16px',
                      color: '#005cb3',
                    }}
                  >
                    {productsList.description}
                  </span>
                </li>
                <br />
                <li
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    listStyle: 'none',
                    marginLeft: '-30px',
                  }}
                >
                  <span
                    style={{
                      fontWeight: 'bold',
                      fontFamily: 'Arial',
                      fontSize: '18px',
                      color: '#004f99',
                    }}
                  >
                    Preço:
                  </span>
                  <span
                    style={{
                      marginTop: '4px',
                      fontFamily: 'arial',
                      fontSize: '16px',
                      color: '#005cb3',
                    }}
                  >
                    {' '}
                    {productsList.price}
                  </span>
                </li>
              </div>
            </ul>
          </ProductContainer>
        </DivListagemProdutos>
      </Container>
    </>
  )
}

export default Profile
