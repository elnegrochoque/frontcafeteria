import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import { NavLink} from 'react-router-dom';

const Navegacion = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">CRUD Basico</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink exact={true} to='/'>Inicio</NavLink>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
};

export default Navegacion;