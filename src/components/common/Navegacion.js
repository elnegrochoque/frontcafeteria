import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import { NavLink} from 'react-router-dom';

const Navegacion = () => {
    return (
        <Navbar bg="danger" variant='dark' expand="lg">
        <Navbar.Brand href="/">CRUD Basico</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink exact={true} to='/' className='nav-link'>Inicio</NavLink>
            <NavLink exact={true} to='/productos' className='nav-link'>Productos</NavLink>
            <NavLink exact={true} to='/productos/nuevo' className='nav-link'>Agregar Producto</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
};

export default Navegacion;