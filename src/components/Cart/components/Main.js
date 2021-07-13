/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Product from './Product'
import '../index.css'
import api from '../../../services/api'

export default function Main(props) {
  const [productsList, setProductsList] = useState([])

  async function getOneProducts() {
    const id = localStorage.getItem('ID')
    const { data } = await api.get(`/${id}`)

    setProductsList(data)

    console.log(data)

    return data
  }

  useEffect(() => {
    getOneProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { products, onAdd } = props
  return (
    <main className="block col-2">
      <h2>Products</h2>
      <div className="row">
        {/* {productsList.map((product) => ( */}
        <div className="list-product">
          <Product key={productsList._id} product={productsList.title} onAdd={onAdd}></Product>
        </div>
        {/* ))} */}
      </div>
    </main>
  )
}
