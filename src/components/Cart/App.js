import Header from './components/Header'
import Main from './components/Main'
import Basket from './components/Basket'
import { useEffect, useState } from 'react'
import './index.css'
import api from '../../services/api'

function App() {
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

  // const products =
  //  productsList
  const [cartItems, setCartItems] = useState([])
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id)
    if (exist) {
      setCartItems(
        cartItems.map((x) => (x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x))
      )
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }])
    }
  }
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id)
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id))
    } else {
      setCartItems(
        cartItems.map((x) => (x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x))
      )
    }
  }
  return (
    <div className="App">
      <Header countCartItems={cartItems.length}></Header>
      <div className="row">
        <Main products={productsList} onAdd={onAdd}></Main>
        <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}></Basket>
      </div>
    </div>
  )
}

export default App
