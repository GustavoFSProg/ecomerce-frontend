/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import api from '../../../services/api'
import { CartContext } from '../../../Contexts/CartContext'

export default function Product(props) {
  const { product, onAdd } = props

  const [productsList, setProductsList] = useState([])
  const { productId, setProductId } = useContext(CartContext)

  async function getOneProducts() {
    // const id = productId
    const id = localStorage.getItem('ID')

    setProductId(...productId, productId)

    console.log(`productId-context: ${id}`)

    // productId.map(item => {

    const { data } = await api.get(`/${id}`)
    // })

    setProductsList(data)

    console.log(data)

    return data
  }

  useEffect(() => {
    getOneProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <>
        <img
          className="small"
          src={`https://ecomerce-api.herokuapp.com/files/${productsList.image}`}
          alt={productsList.title}
        />
        <h3>{productsList.title}</h3>
        <div>${productsList.price}</div>
        <div>
          <button onClick={() => onAdd(productsList)}>Add To Cart</button>
        </div>
      </>
    </div>
  )
}
