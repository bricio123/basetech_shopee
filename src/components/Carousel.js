import React from "react";

import { Carousel } from "react-bootstrap";

import Primeira from "../assets/capacitadores.jpg";
import Segundo from "../assets/capacitadores_dois.jpg";
import terceiro from "../assets/capacitadores_tres.jpg";

import styled from "styled-components";

import ButtonBase from "@material-ui/core/ButtonBase";
import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";

function components() {
  return (
    <ContainerPosition>
      <Carousel>
        <Carousel.Item>
          <Image src={Primeira} alt="First slide" />
          <Carousel.Caption className="d-flex align-items-center h-100" >
            <BoxText>
              <h1>Monitor Dell</h1>
              <small>Oferte agora mesmo sobre este produto.</small>
              <Link to="/MonitorDell">
                <Button variant="contained" color="secondary" className='mt-5'>
                  Ofertar
                </Button>
              </Link>
            </BoxText>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image className="d-block w-100" src={Segundo} alt="Second slide" />

          <Carousel.Caption  className="d-flex align-items-center h-100">
            <BoxText>
              <h1>Caixa de som JBL </h1>
              <small>Oferte agora mesmo sobre este produto.</small>
              <Link to="/Jbl">
                <Button variant="contained" color="secondary" className='mt-5'>
                  Ofertar
                </Button>
              </Link>
            </BoxText>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image className="d-block w-100" src={terceiro} alt="Third slide" />

          <Carousel.Caption className="d-flex align-items-center h-100">
            <BoxText>
              <h1>Smart tv 55 polegadas</h1>
             
              <small>Oferte agora mesmo sobre este produto.</small>
              <Link to="/TV">
                <Button variant="contained" color="secondary" className='mt-5'>
                  Ofertar
                </Button>
              </Link>
            </BoxText>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </ContainerPosition>
  );
}

const ContainerPosition = styled.div`
  width: 100%;
  position: relative;
  margin-top: 50px;
  height: 90vh;
`;
const Image = styled.img`
  height: 95vh;
  width: 100%;
  flex-shrink: none;
`;
const BoxText = styled.div`
  width: 100%;
  height: 400px;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.452);
  align-items: center;
  display: flex;
  justify-content: center;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 930px) {
    img {
    }
  }
`;

export default components;
