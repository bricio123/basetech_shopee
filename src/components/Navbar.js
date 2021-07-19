import React from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import Logo from "../assets/log.ico";

import {  Nav, Navbar, Container } from "react-bootstrap";

import styled from "styled-components";

import { Link } from "react-router-dom";

export default function PrimarySearchAppBar() {
  return (
    <NavbarTod>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="position-fixed w-100 $z-index-sticky "
      >
        <Container>
          <Navbar.Brand href="#home">
            {" "}
            <Link to="/">
              <img src={Logo} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link
                  to="/Eletrodomestico"
                  className="text-decoration-none text-light"
                >
                  Eletrodoméstico
                </Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>
                <Link
                  to="/Informatica"
                  className="text-decoration-none text-light"
                >
                  Informática
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Moveis" className="text-decoration-none text-light">
                  Móveis
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/FerramentasLazer" className="text-decoration-none text-light">
                  Ferramentas E Lazer
                </Link>
              </Nav.Link>
            </Nav>
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </NavbarTod>
  );
}

const NavbarTod = styled.div`
  position: fixed;
  top: 0;
  z-index: 9999;
`;
