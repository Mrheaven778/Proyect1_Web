import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export const NavComponents = () => {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container >
                    <Navbar.Brand href="#home">Inicio</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Peliculas</Nav.Link>
                        <Nav.Link href="#features">Blog</Nav.Link>
                        <Nav.Link href="#pricing">Contacto</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
export default NavComponents;