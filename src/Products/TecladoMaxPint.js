import React from "react";
import { Modal, Button } from "react-bootstrap";
import NavBarN from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";

function TecladoMaxPrint() {
  return (
    <>
      <NavBarN />
      <Container>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdrlZ7Yui76seUu8ZSC78QujGxdVEaKTVAz-LqEntpaiRKMaw/viewform?embedded=true"
          
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </Container>
      <Footer />
    </>
  );
}
const Container = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  iframe {
    display: flex;
    height: 1150px;
    width: 100%;
  }
`;
export default TecladoMaxPrint;
