import React from "react";
import { Card, Button, Modal, Col, Image } from "react-bootstrap";

import TecladoMaxprintimg from "../assets/tecladomaxprint.jpg";
import Moveis from "../assets/moveis.webp";
import MonitorDellimg from "../assets/monitorDellBranco.jpg";
import foneLogtech from "../assets/foneLogitech.jpg";

import styled from "styled-components";
import { Link } from "react-router-dom";

import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Formulario from "../components/Form";

import CardInfo from "../components/CardsInformatica";
//material ui
import Navigation from "../components/Navigation";

import Container from "@material-ui/core/Container";

function Info(ComplexGrid) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <NavBar />
      <h1 className="mt-5 pt-5 ml-3">Informática</h1>
      <CardInfo />
    </div>
  );
}

const Option = styled.div`
  display: flex;
  flex-direction: column;
`;
const Imagem = styled.img`
  width: 100%;
  height: 0px;
`;
const Modalcontainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const ModalContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (max-width: 566px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;
export default Info;
