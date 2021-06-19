import React from 'react'
import { Link } from 'react-router-dom'
import { Container, List } from './styles'

function Header() {
  return (
    <Container>
      <ul>
        <List>
          <Link
            to="/"
            style={{
              // display: 'flex',
              listStyle: 'none',
              fontFamily: 'Trebuchet',
              fontSize: '17px',
              color: 'black',
              textDecoration: 'none',
              paddingRight: '13px',
            }}
          >
            Home
          </Link>
        </List>
        <List>
          <Link
            to="/products"
            style={{
              // display: 'flex',
              listStyle: 'none',
              fontFamily: 'Trebuchet',
              fontSize: '17px',
              color: 'black',
              textDecoration: 'none',
              paddingRight: '13px',
            }}
          >
            Products
          </Link>
        </List>
      </ul>
    </Container>
  )
}

export default Header
