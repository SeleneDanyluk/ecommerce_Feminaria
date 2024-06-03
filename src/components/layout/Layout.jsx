import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Layout.css'
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

const Layout = ({ children }) => {
    return (
        <div>
            {/*Navbar*/}
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
                            <Nav.Link className='beige-claro' href=''>Autoras</Nav.Link>
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
            {/*Footer*/}
            <div className='footer-container'>
                <Row>
                    <Col>Logo</Col>
                    <Col>
                        <Row>
                            <Col>
                                <Nav defaultActiveKey="/home" className="flex-column">
                                    <h6>Explorar</h6>
                                    <Nav.Link href="/home">Nosotras</Nav.Link>
                                    <Nav.Link eventKey="link-1">Libros</Nav.Link>
                                    <Nav.Link eventKey="link-2">Autoras</Nav.Link>
                                </Nav>
                            </Col>
                            <Col>
                                <Nav defaultActiveKey="/home" className="flex-column">
                                    <h6>Mi cuenta</h6>
                                    <Nav.Link href="/home">Ingresar</Nav.Link>
                                    <Nav.Link eventKey="link-1">Carrito</Nav.Link>
                                </Nav>
                            </Col>
                            <Col>
                                <Col>
                                    <Nav defaultActiveKey="/home" className="flex-column">
                                        <h6>Contacto</h6>
                                        <Nav.Item>Email: feminaria@gmail.com</Nav.Item>
                                        <Nav.Item>Telefono: 341-556985</Nav.Item>
                                        <Nav.Link href="/home">Librerias</Nav.Link>
                                        <Nav.Link eventKey="link-1">Redes</Nav.Link>
                                    </Nav>
                                </Col>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Layout