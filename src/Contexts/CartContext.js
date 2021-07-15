import React, { createContext, useState } from 'react'

export const CartContext = createContext({})

export function CartContextProvider(props) {
  const [productId, setProductId] = useState([])

  console.log(productId)
  return (
    <CartContext.Provider value={{ productId, setProductId }}>
      {props.children}
    </CartContext.Provider>
  )
}
