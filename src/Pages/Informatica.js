import React from "react";
import { Card, Button, Modal } from "react-bootstrap";

import TecladoMaxprintimg from "../assets/tecladomaxprint.jpg";
import Moveis from "../assets/moveis.webp";
import MonitorDellimg from "../assets/monitorDellBranco.jpg";
import foneLogtech from "../assets/foneLogitech.jpg";

import styled from "styled-components";
import { Link } from "react-router-dom";

import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Formulario from "../components/Form";

function Info() {
  const [modalShow, setModalShow] = React.useState(false);

  let MonitorDell = {
    src: "https://m.media-amazon.com/images/I/812cGsOJhtL._AC_SL1500_.jpg",
    name: "Monitor Dell",
    desc: "Monitor dell full hd",
  };
  let TecladoMaxprint = {
    name: "Teclado MaxPrint",
    desc: "Teclado Padrão preto Maxprint ",
  };
  let FoneLogitech = {
    src: "https://http2.mlstatic.com/D_NQ_NP_854669-MLB46294817361_062021-O.webp",
    name: "Fone de ouvido Logitech",
    desc: "fone de ouvido logitech preto",
  };
  let AdaptadorHDMIVGA = {
    src: "https://m.media-amazon.com/images/I/61JYb12Z3gL._AC_SL1000_.jpg",
    name: "Adaptador HDMI para VGA",
    desc: "Adaptador HDMI Para VGA preto 720px",
  };
  let Accesscontrol = {
    src: "https://backend.intelbras.com/sites/default/files/integration/bio_inox_plus_ss_311_mf_persp_esq_02.png",
    name: "Controle de acesso",
    desc: "Bio inox Plus SS 311 MF",
  };
  let AdaptadorDisplayportVGA = {
    src: "https://http2.mlstatic.com/D_NQ_NP_915091-MLB31733329548_082019-O.webp",
    name: "Adaptador Displayport  para VGA",
    desc: "Adapter Displayport/VGA",
  }
  let AdaptadorHDMIMicro = {
    src: "https://http2.mlstatic.com/D_NQ_NP_973961-MLB32326192902_092019-O.webp",
    name: "Adaptador HDMI para micro HDMI",
    desc: "Adaptador Micro Hdmi Macho Para Hdmi Femea",
  }

  let AdaptadorMicroVGA = {
    src: "https://http2.mlstatic.com/D_NQ_NP_974258-MLB45931672257_052021-O.webp",
    name: "Adaptador Micro HDMI para VGA",
    desc: "Conversor Micro Hdmi Para Vga Com Saida De Áudio",
  }

  let AdapterMicroUSBTipoC = {
    src: "https://http2.mlstatic.com/D_NQ_NP_672000-MLB31178309309_062019-O.webp",
    name: "Adaptador Micro",
    desc: "Adaptador V8 Micro Usb Femea X Tipo C Macho Galaxy A50",
  }
  let CaboHDMI = {
    src: "https://http2.mlstatic.com/D_NQ_NP_902808-MLB32879262825_112019-O.webp",
    name: "Cabo HDMI",
    desc: "Cabo Hdmi 2.0 Ultrahd 4k 3d 30awg 3 Metros Gold Mxt",
    
  }
  let CaboHDMIDeis = {
    src: "https://http2.mlstatic.com/D_NQ_NP_667234-MLB31064546707_062019-O.webp",
    name: "Cabo HDMI 10 metros",
    desc: "Cabo Hdmi 2.0 Pix 4k Ultrahd Hdr 19 Pinos 10 Metros 018-2230",
  }

  let switchPort = {
    src: "https://http2.mlstatic.com/D_NQ_NP_762479-MLB46598226879_072021-O.webp",
    name: "Switch Tp-link ",
    desc: "SWITCH TP-LINK TL-SF1005D 5 PORTAS",
   
  }
  
  
  return (
    <div>
      <NavBar />
      <Container>
        <Card style={{ width: "18rem" }} className="m-5">
          <Card.Img variant="top" src={MonitorDell.src} />
          <Card.Body className="text-center">
            <Card.Title>{MonitorDell.name}</Card.Title>
            <Card.Text className="badge text-wrap">
              {MonitorDell.desc}
            </Card.Text>

            <Option>
              <a
                className="mb-2"
                href="https://www.zoom.com.br/search?q=Monitor%20Dell%20Widescreen%2021.5%22%2C%20SE2216H"
              >
                Valor de mercado
              </a>{" "}
              <Link to="/MonitorDell">
                <Button
                  variant="success"
                  className="w-100"
                  onClick={() => setModalShow(true)}
                >
                  Fazer oferta
                </Button>
              </Link>
            </Option>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }} className="m-5">
          <Card.Img variant="top" src={TecladoMaxprintimg} />
          <Card.Body className="text-center">
            <Card.Title>{TecladoMaxprint.name}</Card.Title>
            <Card.Text className="badge text-wrap">
              {TecladoMaxprint.desc}
            </Card.Text>
            <Option>
              <a
                className="mb-2"
                href="https://www.zoom.com.br/search?q=Monitor%20Dell%20Widescreen%2021.5%22%2C%20SE2216H"
              >
                Valor de mercado
              </a>{" "}
              <Link to="/TecladoMaxPrint">
                <Button
                  variant="success"
                  className="w-100"
                  onClick={() => setModalShow(true)}
                >
                  Fazer oferta
                </Button>
              </Link>
            </Option>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }} className="m-5">
          <Card.Img variant="top" src={FoneLogitech.src} />
          <Card.Body className="text-center">
            <Card.Title>{FoneLogitech.name}</Card.Title>

            <Card.Text className="badge text-wrap">
              {foneLogtech.desc}
            </Card.Text>
            <Option>
              <a
                className="mb-2"
                href="https://www.zoom.com.br/search?q=Monitor%20Dell%20Widescreen%2021.5%22%2C%20SE2216H"
              >
                Valor de mercado
              </a>
              <Link to="/FoneLogitech">
                {" "}
                <Button variant="success" className="w-100">
                  Fazer oferta
                </Button>
              </Link>
            </Option>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }} className="m-5">
          <Card.Img variant="top" src={AdaptadorHDMIVGA.src} />
          <Card.Body className="text-center">
            <Card.Title>{AdaptadorHDMIVGA.name}</Card.Title>

            <Card.Text className="badge text-wrap">
              {AdaptadorHDMIVGA.desc}
            </Card.Text>
            <Option>
              <a
                className="mb-2"
                href="https://www.zoom.com.br/search?q=Monitor%20Dell%20Widescreen%2021.5%22%2C%20SE2216H"
              >
                Valor de mercado
              </a>
              <Link to="/AdaptadotHDMIVGA">
                {" "}
                <Button variant="success" className="w-100">
                  Fazer oferta
                </Button>
              </Link>
            </Option>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }} className="m-5">
          <Card.Img variant="top" src={Accesscontrol.src} />
          <Card.Body className="text-center">
            <Card.Title>{Accesscontrol.name}</Card.Title>

            <Card.Text className="badge text-wrap">
              {Accesscontrol.desc}
            </Card.Text>
            <Option>
              <a
                className="mb-2"
                href="https://www.intelbras.com/pt-br/controlador-de-acesso-1356mhz-bio-inox-plus-ss-311-mf#beneficios"
              >
                Valor de mercado
              </a>
              <Link to="/ControleAcesso">
                {" "}
                <Button variant="success" className="w-100">
                  Fazer oferta
                </Button>
              </Link>
            </Option>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }} className="m-5">
          <Card.Img variant="top" src={ AdaptadorDisplayportVGA.src} />
          <Card.Body className="text-center">
            <Card.Title>{ AdaptadorDisplayportVGA.name}</Card.Title>

            <Card.Text className="badge text-wrap">
              { AdaptadorDisplayportVGA.desc}
            </Card.Text>
            <Option>
              <a
                className="mb-2"
                href="https://www.intelbras.com/pt-br/controlador-de-acesso-1356mhz-bio-inox-plus-ss-311-mf#beneficios"
              >
                Valor de mercado
              </a>
              <Link to="/AdaptadotHDMIDisplay">
                {" "}
                <Button variant="success" className="w-100">
                  Fazer oferta
                </Button>
              </Link>
            </Option>
          </Card.Body>
        </Card>

       
        <Card style={{ width: "18rem" }} className="m-5">
          <Card.Img variant="top" src={ AdaptadorHDMIMicro.src} />
          <Card.Body className="text-center">
            <Card.Title>{ AdaptadorHDMIMicro.name}</Card.Title>

            <Card.Text className="badge text-wrap">
              { AdaptadorHDMIMicro.desc}
            </Card.Text>
            <Option>
              <a
                className="mb-2"
                href="https://www.intelbras.com/pt-br/controlador-de-acesso-1356mhz-bio-inox-plus-ss-311-mf#beneficios"
              >
                Valor de mercado
              </a>
              <Link to="/AdaptadotHDMIMicroHDMI">
                {" "}
                <Button variant="success" className="w-100">
                  Fazer oferta
                </Button>
              </Link>
            </Option>
          </Card.Body>
        </Card>
       

        <Card style={{ width: "18rem" }} className="m-5">
          <Card.Img variant="top" src={ AdaptadorMicroVGA.src} />
          <Card.Body className="text-center">
            <Card.Title>{ AdaptadorMicroVGA.name}</Card.Title>

            <Card.Text className="badge text-wrap">
              { AdaptadorMicroVGA.desc}
            </Card.Text>
            <Option>
              <a
                className="mb-2"
                href="https://www.intelbras.com/pt-br/controlador-de-acesso-1356mhz-bio-inox-plus-ss-311-mf#beneficios"
              >
                Valor de mercado
              </a>
              <Link to="/AdaptadorMicroHDMIVGA">
                {" "}
                <Button variant="success" className="w-100">
                  Fazer oferta
                </Button>
              </Link>
            </Option>
          </Card.Body>
        </Card>





        <Card style={{ width: "18rem" }} className="m-5">
          <Card.Img variant="top" src={ AdapterMicroUSBTipoC.src} />
          <Card.Body className="text-center">
            <Card.Title>{ AdapterMicroUSBTipoC.name}</Card.Title>

            <Card.Text className="badge text-wrap">
              { AdapterMicroUSBTipoC.desc}
            </Card.Text>
            <Option>
              <a
                className="mb-2"
                href="https://www.intelbras.com/pt-br/controlador-de-acesso-1356mhz-bio-inox-plus-ss-311-mf#beneficios"
              >
                Valor de mercado
              </a>
              <Link to="/AdaptadorMicroHDMIVGA">
                {" "}
                <Button variant="success" className="w-100">
                  Fazer oferta
                </Button>
              </Link>
            </Option>
          </Card.Body>
        </Card>




        <Card style={{ width: "18rem" }} className="m-5">
          <Card.Img variant="top" src={ CaboHDMI.src} />
          <Card.Body className="text-center">
            <Card.Title>{ CaboHDMI.name}</Card.Title>

            <Card.Text className="badge text-wrap">
              { CaboHDMI.desc}
            </Card.Text>
            <Option>
              <a
                className="mb-2"
                href="https://www.intelbras.com/pt-br/controlador-de-acesso-1356mhz-bio-inox-plus-ss-311-mf#beneficios"
              >
                Valor de mercado
              </a>
              <Link to="/CabosHDMI">
                {" "}
                <Button variant="success" className="w-100">
                  Fazer oferta
                </Button>
              </Link>
            </Option>
          </Card.Body>
        </Card>


        <Card style={{ width: "18rem" }} className="m-5">
          <Card.Img variant="top" src={ CaboHDMIDeis.src} />
          <Card.Body className="text-center">
            <Card.Title>{ CaboHDMIDeis.name}</Card.Title>

            <Card.Text className="badge text-wrap">
              { CaboHDMIDeis.desc}
            </Card.Text>
            <Option>
              <a
                className="mb-2"
                href="https://www.intelbras.com/pt-br/controlador-de-acesso-1356mhz-bio-inox-plus-ss-311-mf#beneficios"
              >
                Valor de mercado
              </a>
              <Link to="/CabosHDMIDeis">
                {" "}
                <Button variant="success" className="w-100">
                  Fazer oferta
                </Button>
              </Link>
            </Option>
          </Card.Body>
        </Card>

        
        <Card style={{ width: "18rem" }} className="m-5">
          <Card.Img variant="top" src={ switchPort.src} />
          <Card.Body className="text-center">
            <Card.Title>{ switchPort.name}</Card.Title>

            <Card.Text className="badge text-wrap">
              { switchPort.desc}
            </Card.Text>
            <Option>
              <a
                className="mb-2"
                href="https://www.intelbras.com/pt-br/controlador-de-acesso-1356mhz-bio-inox-plus-ss-311-mf#beneficios"
              >
                Valor de mercado
              </a>
              <Link to="/CabosHDMIDeis">
                {" "}
                <Button variant="success" className="w-100">
                  Fazer oferta
                </Button>
              </Link>
            </Option>
          </Card.Body>
        </Card>

      </Container>
      <Footer />
    </div>
  );
}

const Container = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  margin-top: 60px;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 1138px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-self: center;
    align-items: center;
  }
  @media (max-width: 760px) {
    justify-items: center;
    grid-column: 200px;
    align-items: center;
    display: grid;
    justify-content: center;

    grid-template-columns: 1fr;
  }
`;
const Option = styled.div`
  display: flex;
  flex-direction: column;
`;
const Image = styled.img`
  width: 200px;
  height: auto;
  margin: 10px;
`;
const modalTest = styled.div`
  width: 100%;
  height: 100vw;
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
