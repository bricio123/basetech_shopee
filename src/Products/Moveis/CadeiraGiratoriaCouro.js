import React from "react";
import { Modal, Button, Navbar } from "react-bootstrap";
import NavBarN from "../../components/Navbar";
import Footer from "../../components/Footer";
import styled from "styled-components";

function Sofa() {
  return (
    <>
      <NavBarN />
      <Container>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdr5d8CAhe7J10-lzaTzKzbVdn-ZpGkWpP5dI8q9Zg94LVN2A/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
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
    height: 2300px;
    width: 100%;
  }
`;

export default Sofa;
