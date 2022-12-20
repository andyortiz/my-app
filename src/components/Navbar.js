import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import CartWidget from './CartWidget';

const navbar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Celumanía</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">Celulares</Nav.Link>
                <Nav.Link href="#pricing">Accesorios</Nav.Link>
                <NavDropdown title="Marcas" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">iPhone</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Samsung</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Xiaomi</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#deets">Contacto</Nav.Link>
              </Nav>
              <Nav>
                <CartWidget/>
              </Nav>
            </Navbar.Collapse>
          </Container>
          <Breadcrumb/>
        </Navbar>
      );
}

export default navbar