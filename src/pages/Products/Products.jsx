import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../../services/api'
import Header from '../Header/Header'
import { Container, BuyButton, ProductContainer, DivListagemProdutos } from './styles'

function Products() {
  const [productsList, setProductsList] = useState([])
  const history = useHistory()

  async function handleCart(id) {
    localStorage.setItem('ID', id)

    // await api.get(`/${id}`)

    history.push('/cart')
  }

  async function getAllProducts() {
    const { data } = await api.get('/')
    setProductsList(data)
    return data
  }

  async function handleProductsId(id) {
    localStorage.setItem('ID', id)

    await api.get(`/${id}`)

    history.push('/profile')
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <>
      <Header />
      <Container>
        <br />
        <DivListagemProdutos>
          {productsList.map((item) => (
            <ProductContainer>
              <ul
                key={item.id}
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
                    src={`https://ecomerce-api.herokuapp.com/files/${item.image}`}
                  />
                </li>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    listStyle: 'none',
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
                      {item.title}
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
                      {item.price}
                    </span>
                  </li>
                  <BuyButton type="button" onClick={() => handleProductsId(item._id)}>
                    Detalhes
                  </BuyButton>

                  <BuyButton
                    className="buy-button"
                    type="button"
                    onClick={() => handleCart(item._id)}
                  >
                    Comprar
                  </BuyButton>
                </div>
              </ul>
            </ProductContainer>
          ))}
        </DivListagemProdutos>
      </Container>
    </>
  )
}

export default Products
