import React from "react";
import styled from "styled-components";
import Logo from "../assets/log.ico";
import {Link} from 'react-router-dom';
// import { Container } from './styles';

function FooterCompo() {
  return (
      <div>
    <Footer>
     <Link to='/' ><Image src={Logo} /></Link>
      <ContainerA>
        <Letter>
          <FirstText>
            <h2>Contato</h2>
            <span>email</span>
            <span>Telefone</span>
            <span>Redes Sociais</span>
          </FirstText>
          <FirstText>
            <h2>Sobre</h2>
            <span>Produtos</span>
            <span>Descontos</span>
            <span>Sobre nós </span>
          </FirstText>
          <FirstText>
            <h2>Links diretos</h2>
            <span>Informática</span>
            <span>Móveis</span>
            <span>Eletrodomésticos</span>
          </FirstText>
        </Letter>
      </ContainerA>
      <Paragraph>
        <small >Site feito por Fabricio</small>      
           
    </Paragraph>
    </Footer>
    
    </div>
  );
}
const Footer = styled.div`
  width: 100%;
  height: auto;
  background: #000;

`;
const ContainerA = styled.div`
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 50px;
  @media (max-width:1150px){
      padding:20px;

  }
`;
const Image = styled.img`
  width: 50px;
  height: auto;
  margin: 10px;
`;
const Letter = styled.div`
  width: 100%;
  align-items: center;
  text-align: left;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
const FirstText = styled.p`
  display: flex;
  flex-direction: column;
  color: #fff;
`;
const Paragraph = styled.div`
  width: 100% ;
  color: #fff;
  text-align:center;

`;

export default FooterCompo;
