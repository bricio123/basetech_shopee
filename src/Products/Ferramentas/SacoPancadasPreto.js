import React from "react";
import { Modal, Button, Navbar } from "react-bootstrap";
import NavBarN from "../../components/Navbar";
import Footer from "../../components/Footer";
import styled from "styled-components";

function SacoPancadasPreto() {
  return (
    <>
      <NavBarN />
      <Container>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScf8z-DM1vHoNMMLIqma0Hg_-OAF3WKLpzmWFAhSoTgrY2hCQ/viewform?embedded=true"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Carregando…
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
    height: 1900px;
    width: 100%;
  }
`;

export default SacoPancadasPreto;
