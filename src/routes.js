import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Header from './pages/Header/Header'
import Products from './pages/Products/Products'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/header" component={Header} />
        <Route path="/products" component={Products} />
      </Switch>
    </BrowserRouter>
  )
}
