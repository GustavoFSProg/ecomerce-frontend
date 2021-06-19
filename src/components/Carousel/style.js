import styled from 'styled-components'

export const ContainerReactPlayer = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
  flex-direction: column;
  /* margin-top: 25px; */
  /* justify-content: center; */
  /* align-items: center; */
  /* margin-top: -155px; */
`
export const Footer = styled.div`
  position: absolute;
  width: 100%;
  height: 92px;
  left: 1px;
  top: 1000px;
  margin-top: 120px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: #f77d27;

  @media screen and (max-width: 600px) {
    margin-top: 120px;
    flex-direction: column;
    height: 342px;
  }
`
export const Data = styled.p`
  color: white;
  font-size: 12px;
  width: 180px;
  line-height: 18px;
  font-family: Lato;
`

export const ImageContainer = styled.div`
  width: 75%;
  height: 416px;
  /* background: #1aa27c; */
  /* background: yellow; */
  border-radius: 12px;
  margin-top: 20px;
  color: white;
  /* color: yellow; */
  font-size: 25px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`

export const ImagemCard = styled.img`
  width: 70%;
  height: 50%;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: row;
  }
`

export const TitleContainer = styled.div`
  width: 45%;
  margin-top: 62px;
  height: 116px;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* text-align: center; */
  /* justify-content: center; */

  @media screen and (max-width: 600px) {
    width: 65%;
  }
`

export const ContainerCarousel = styled.div`
  /* margin-top: 105px; */
  width: 80%;
`

export const Title = styled.span`
  /* position: relative; */

  /* max-width: 12%; */
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 3rem;
  line-height: 64, 8px;

  letter-spacing: 0.01em;

  color: #ffffff;

  @media screen and (max-width: 600px) {
    font-size: 1.4rem;
    font-weight: 400;
    width: 125%;
    margin-left: -6px;
  }

  @media screen and (min-width: 600px) and (max-width: 920px) {
    font-size: 2rem;
  }
`
export const ImagemIman = styled.img`
  @media screen and (min-width: 601px) {
    width: 70%;
    height: 50%;
    margin-top: 72%;
  }

  @media screen and (max-width: 600px) {
    width: 60%;
    height: 80%;
    margin-top: 12%;
    margin-left: -25%;
  }
`
export const ContainerImage = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: right;
  align-items: right; */
  margin-left: 100px;

  @media screen and (max-width: 600px) {
    display: none;
  }
`
export const Line = styled.div`
  position: absolute;
  width: 22%;
  height: 0px;
  left: 15.5%;
  margin-top: 155.78px;

  border: 2px solid #ffffff;

  @media screen and (max-width: 900px) {
    display: none;
    /* width: 40%;
    height: 0px;
    left: 16%;
    margin-top: 20.78px;

    border: 2px solid #ffffff; */
  }
`

export const Logo = styled.img`
  width: 13%;
  background: green;

  @media screen and (max-width: 400px) {
    width: 40%;
  }

  @media screen and (min-width: 400px) and (max-width: 800px) {
    width: 25%;
  } ;
`

export const ContainerTexto = styled.div`
  width: 70%;
  height: 10%;
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  margin-left: 3%;
  margin-top: 1rem;
  text-align: left;
  font-size: 20px;
  font-family: Lato;

  line-height: 32px;

  @media screen and (max-width: 600px) {
    width: 105%;
    margin-top: 148px;
    margin-top: 3.2rem;
  }

  @media screen and (max-width: 450px) {
    width: 105%;
    margin-top: 148px;
    margin-top: 2.2rem;
  }
`

export const ImageFooter = styled.p`
  /* position: absolute; */
  width: 110px;
  height: 56px;
  margin-left: -7px;
  margin-top: 57px;
  /* background: red; */

  font-family: Handlee;
  font-style: normal;
  font-weight: normal;
  font-size: 37px;
  line-height: 0px;
  /* or 0% */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.01em;

  color: #ffffff;
`

export const ContainerFoto = styled.div`
  display: flex;
  flex-direction: row;

  position: absolute;
  width: 100%;
  height: 70.09px;
  top: 82.29px;

  @media screen and (max-width: 800px) {
    display: none;
  }
`

export const Image = styled.img`
  width: 10%;
  height: 100%;
`
export const PromoContainer = styled.div`
  width: 682px;
  height: 202px;
  left: 618px;
  top: 8px;

  background: #ffffff;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 420px) {
    flex-direction: column;
    align-items: center;
    height: auto;
    width: 90%;
  }
`

export const ImagemAvatar = styled.img`
  width: 56%;
  margin-left: 20px;
  margin-top: 4px;
  align-items: left;
  justify-content: left;
  display: flex;

  @media screen and (max-width: 520px) {
    margin-left: 0px;
    width: 95%;
    height: 180px;
  }
`

export const ImagemFace = styled.img`
  width: 22%;
  margin-right: 20px;
  margin-top: 10px;
  align-items: right;
  justify-content: right;
  display: flex;

  @media screen and (max-width: 420px) {
    margin-right: 0px;
  }
`

export const TextOne = styled.img`
  width: 83%;
  margin-right: 20px;
  margin-top: 15px;
  align-items: right;
  justify-content: right;
  display: flex;
  margin-top: 10%;
  height: 20%;
  padding-bottom: 20px;

  @media screen and (max-width: 420px) {
    height: auto;
    width: 122%;
  }
`

export const TextTwo = styled.img`
  width: 77%;
  margin-right: 20px;
  margin-top: 10px;
  align-items: right;
  justify-content: right;
  display: flex;
  padding-bottom: 7px;

  @media screen and (max-width: 420px) {
    height: auto;
    width: 122%;
    margin-top: -10px;
  }
`

export const TextThre = styled.img`
  width: 100%;
  height: 12%;
  margin-right: 20px;
  margin-top: 10px;
  align-items: right;
  justify-content: right;
  display: flex;

  @media screen and (max-width: 420px) {
    height: 13%;
    width: 182%;
    margin-top: 4px;
    margin-left: 20px;
  }
`

export const TextAll = styled.div`
  width: 40%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* justify-content: center; */
  line-height: 43.2px;
  margin-top: 12px;
  margin-bottom: 20px;
`
