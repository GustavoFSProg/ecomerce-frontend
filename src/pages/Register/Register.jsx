import React, { useState } from 'react'
import { useHistory } from 'react-router'
import api from '../../services/api'
import Header from '../Header/Header'
import {
  Container,
  ProductContainer,
  DivListagemProdutos,
  Input,
  FormContainer,
  Label,
  InputFile,
  Button,
} from './styles'

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

      data.append('title', title)
      // data.append('description', description)
      data.append('price', price)
      data.append('image', image)

      await api.post('/register', data)

      alert('Cadastro realizado com sucesso!')
      return history.push('/')
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
              <FormContainer>
                <InputFile
                  type="file"
                  id="image"
                  className="botao-imagem"
                  onChange={(e) => setImage(e.target.files[0])}
                />
                <Label>Nome: </Label>
                <Input
                  placeholder="Digite o Nome do Produto"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <Label>Preço: </Label>
                <Input
                  placeholder="Digite o Preço do Produto"
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <br />
                <Button className="confirm-button" type="submit">
                  Cadastrar
                </Button>
              </FormContainer>
            </form>
          </ProductContainer>
        </DivListagemProdutos>
      </Container>
    </>
  )
}

export default Register
