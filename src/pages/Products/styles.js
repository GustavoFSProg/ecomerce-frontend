import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 880px;
  background: #e6f3ff;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const DivListagemProdutos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`
