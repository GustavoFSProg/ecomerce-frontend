import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { Link } from 'react-router-dom'

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        style={{
          // display: 'flex',
          listStyle: 'none',
          fontFamily: 'Trebuchet',
          fontSize: '17px',
          color: 'black',
          textDecoration: 'none',
          paddingRight: '13px',
        }}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Produtos
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          {' '}
          <Link
            to="/products"
            style={{
              // display: 'flex',
              listStyle: 'none',
              fontFamily: 'Trebuchet',
              fontSize: '17px',
              color: 'black',
              textDecoration: 'none',
              // paddingRight: '13px',
            }}
          >
            Lista
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>Cadastro</MenuItem>
        <MenuItem onClick={handleClose}>Perfil</MenuItem>
      </Menu>
    </div>
  )
}
