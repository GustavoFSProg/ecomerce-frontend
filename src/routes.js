import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Header from './pages/Header/Header'
import Products from './pages/Products/Products'
import Register from './pages/Register/Register'
import Profile from './pages/Profile/Profile'
import Cart from './components/Cart/App'
import { CartContextProvider } from './Contexts/CartContext'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <CartContextProvider>
          <Route path="/" exact component={Home} />
          <Route path="/header" component={Header} />
          <Route path="/products" component={Products} />
          <Route path="/register" component={Register} />
          <Route path="/profile" component={Profile} />
          <Route path="/cart" component={Cart} />
        </CartContextProvider>
      </Switch>
    </BrowserRouter>
  )
}
