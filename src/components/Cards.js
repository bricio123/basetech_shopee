import React from "react";
import { Card, Button } from "react-bootstrap";

import Informatica from "../assets/informatica.webp";
import Moveis from '../assets/moveis.webp';
import Eletrodomesticos from '../assets/eletrodomestico.webp';
import Ferramentas from '../assets/ferramentas.jpg'
import styled from "styled-components";
import { Link } from "react-router-dom";


function Cards() {
  return (
    <Group>
        <Text>Nossos Produtos</Text>
      <ContainerA>
        <Card style={{ width: "18rem" }} className='m-5'>
          <Card.Img variant="top" src={Informatica} />
          <Card.Body>
            <Card.Title>Informática</Card.Title>
            <Card.Text>Preços que cabem no seu bolso.</Card.Text>
            <Link to='/Informatica'>
            <Button >Ver produtos</Button>
            </Link>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }} className='m-5'>
          <Card.Img variant="top" src={Moveis} />
          <Card.Body>
            <Card.Title>Móveis</Card.Title>
            <Card.Text>Não perca essa oportunidade de comprar seu movél</Card.Text>
           <Link to='/Moveis'> <Button variant="primary">Ver produtos</Button></Link>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }} className='m-5'    >
          <Card.Img variant="top" src={Eletrodomesticos} />
          <Card.Body>
            <Card.Title>Eletrodomésticos</Card.Title>
            <Card.Text>Com facilidade de pagamento.</Card.Text>
          <Link to='/Eletrodomestico'> <Button variant="primary">Ver produtos</Button></Link>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }} className='m-5'    >
          <Card.Img variant="top" src={Ferramentas} />
          <Card.Body>
            <Card.Title>Ferramentas e Lazer</Card.Title>
            <Card.Text>Temos certeza que aqui você vai encontrar.</Card.Text>
          <Link to='/FerramentasLazer'> <Button variant="primary">Ver produtos</Button></Link>
          </Card.Body>
        </Card>
      </ContainerA>
    </Group>
  );
}

const Group = styled.div`
  width: 100%;
  align-items:center;
  height: 100vh;
  flex-direction:column;
  display: flex;
 
  justify-content: center;
  margin-top:50px;

  @media (max-width:1150px){
    height:100%;

  }
  @media (max-width:846px){
    height:100%;
  }
 


`;
const ContainerA = styled.div`
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width:1150px){
    max-width:100%;

  }
  @media (max-width:846px){
    display:grid;
    grid-template-columns:1fr 1fr;
  }
  @media (max-width:698px){
    display:grid;
    grid-template-columns:1fr;
    }
`;

const Text = styled.h3`
    
    color:#808080;
    margin-top:50px;
    font-weight:bold;
    text-transform:uppercase;

`
export default Cards;
