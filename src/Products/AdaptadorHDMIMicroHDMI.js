import React from "react";
import { Modal, Button, Navbar } from "react-bootstrap";
import NavBarN from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";

function AdaptadorHDMIMicroHDMI() {
  return (
    <>
      <NavBarN />
      <Container>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfwyB0LIWEYjGfumI1awKoFE9BWmNrTvcaKfQSlmQNLveUJXA/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
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
    height: 1300px;
    width: 100%;
  }
`;

export default AdaptadorHDMIMicroHDMI;
