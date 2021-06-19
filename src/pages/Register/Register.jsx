import React, { useState } from 'react'
import { useHistory } from 'react-router'
import api from '../../services/api'
import Header from '../Header/Header'
import { Container, ProductContainer, DivListagemProdutos } from './styles'

function Register() {
  const [title, setTitle] = useState('')
  // const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState([])

  const history = useHistory()

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      const data = new FormData()

      if (!typeof price === Number) {
        return alert('O preço deve ser um numero!!')
      } else {
        data.append('title', title)
        // data.append('description', description)
        data.append('price', price)
        data.append('image', image)

        await api.post('/register', data)

        alert('Cadastro realizado com sucesso!')
        return history.push('/')
      }
    } catch (error) {
      console.log(error)
      return alert(`Deu erro no front ${error}`)
    }
  }

  return (
    <>
      <Header />
      <Container>
        <br />
        <DivListagemProdutos>
          <ProductContainer>
            <form onSubmit={handleSubmit}>
              <input
                type="file"
                id="image"
                className="botao-imagem"
                onChange={(e) => setImage(e.target.files[0])}
              />
              <label>Nome: </label>
              <input id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
              <label>Preço: </label>
              <input id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
              <br />
              {/* <button className="confirm-button" type="submit">
                Cadastrar
              </button> */}
            </form>
          </ProductContainer>
        </DivListagemProdutos>
      </Container>
    </>
  )
}

export default Register
