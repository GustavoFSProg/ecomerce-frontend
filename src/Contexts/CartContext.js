import React, { createContext, useState } from 'react'

export const CartContext = createContext({})

export function CartContextProvider(props) {
  const [productId, setProductId] = useState(0)
  return (
    <CartContext.Provider value={{ productId, setProductId }}>
      {props.children}
    </CartContext.Provider>
  )
}
