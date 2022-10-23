import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import LeftSideNav from '../leftsideNav/LeftSideNav';

const Header = () => {
    return (
        <section>
            <Navbar collapseOnSelect sticky='top' expand="lg" bg="light" variant="light" className='mb-2 py-3'>
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                            <Nav.Link href="#pricing"><Link to={'/'} className="text-decoration-none text-muted">Home</Link></Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                        <div className='d-lg-none'>
                            <LeftSideNav />
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </section>
    );
};

export default Header; <h3>This is header</h3>