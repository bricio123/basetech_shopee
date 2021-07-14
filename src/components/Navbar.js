import {
  NavDropdown,
  Nav,
  Button,
  Form,
  Navbar,
  FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../assets/log.ico";

function NavBarComponent() {
  return (
    
    <Navbar
      expand="lg"
      className="position-fixed w-100 bg-light bg-gradient"
      style={{ zIndex: 100, top:0 }}
    >
      <Link to="/">
        {" "}
        <Navbar.Brand href="#">
          <img src={Logo} alt="logo" />
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link href="#action1">Início</Nav.Link>
          <Nav.Link href="#action2"></Nav.Link>
          <NavDropdown title="Produtos" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">
              <Link to="/Eletrodomestico">Eletrodomésticos</Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              <Link to="/informatica">Informática</Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              <Link to="/Moveis">Movéis</Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action6">Ferramentas</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#">About</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Procurar"
            className="mr-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Procurar</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBarComponent;
