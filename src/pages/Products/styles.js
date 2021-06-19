import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 888px;
  background: #e6f3ff;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  @media screen and (max-width: 700px) {
    height: auto;
  }
`

export const DivListagemProdutos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 23px;
  margin-top: 50px;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    margin-top: 10px;
    margin-left: -35px;
  }
`
export const ProductContainer = styled.div`
  background: #cce6ff;
  margin-left: 20px;
  border-radius: 15px;

  @media screen and (max-width: 700px) {
    margin-top: 20px;
  }
`
