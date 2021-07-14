import React from "react";
import { Carousel } from "react-bootstrap";
import Primeira from "../assets/capacitadores.jpg";
import Segundo from "../assets/capacitadores_dois.jpg";
import terceiro from "../assets/capacitadores_tres.jpg";

import styled from "styled-components";

function components() {
  return (
    <ContainerPosition>
      <Carousel >
        <Carousel.Item>
          <Image src={Primeira} alt="First slide" />
          <Carousel.Caption>
            <h3>Não reservamos Produtos!</h3>
            <p>Aproveite nossas ofertas! nao deixe de comprar</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image className="d-block w-100" src={Segundo} alt="Second slide" />

          <Carousel.Caption>
            <h3>Saldão da informática</h3>
            <p>Computadores com configurações excelente, não perca essa oportunidade!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image className="d-block w-100" src={terceiro} alt="Third slide" />

          <Carousel.Caption>
            <h3>Não fazemos entregas dos nossos produtos.</h3>
            <p>
            Após a compra te mostramos o endereço.  
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </ContainerPosition>
  );
}

const ContainerPosition = styled.div`
  width: 100%;
  position:relative;

  height:90vh;
`;
const Image = styled.img`
  height:95vh;
  width:100%;
  flex-shrink:none;

`

export default components;
