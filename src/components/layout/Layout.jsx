import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Layout.css'
import { useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
    const navigate = useNavigate();

    const handleAuthorsNavigation = () => {
        navigate("/authors");
      };

    return (
        <div>
            <Container fluid className='navbar-container-1'>
                Logo
            </Container>
            <Navbar expand="lg" className="navbar-container-2">
                <Container fluid>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link className='beige-claro' href="#action1">Nosotros</Nav.Link>
                            <Nav.Link className='beige-claro' href="#action2">Libros</Nav.Link>
                            <Nav.Link className='beige-claro' onClick={handleAuthorsNavigation} href=''>Autoras</Nav.Link>
                            <Nav.Link className='beige-claro' href="#">Contacto</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Buscar"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-secondary search-button">Buscar</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {children}
        </div>
    )
}

export default Layout