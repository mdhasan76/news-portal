import React from 'react';
import { Outlet } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftSideNav from '../shered/leftsideNav/LeftSideNav';
import RightSideNav from '../shered/rightNav/RightSideNav';
import Header from '../shered/header/Header';
import Footer from '../shered/footer/Footer';

const Main = () => {
    return (
        <section>
            <Header />
            <Container>
                <Row>
                    <Col lg="2">
                        <LeftSideNav />
                    </Col>
                    <Col lg="7">
                        <Outlet />
                    </Col>
                    <Col lg="3">
                        <RightSideNav />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </section>
    );
};

export default Main;