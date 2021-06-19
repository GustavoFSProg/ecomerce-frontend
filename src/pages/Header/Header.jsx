import React from 'react'
import { Link } from 'react-router-dom'
import SimpleMenu from '../../components/Menu/menu'
import { Container, List } from './styles'

function Header() {
  return (
    <Container>
      <ul
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
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
            HOME
          </Link>
        </List>
        <List>
          <SimpleMenu />
        </List>
      </ul>
    </Container>
  )
}

export default Header
