import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaTwitch, FaDiscord } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/brand1.webp'
import img2 from '../../assets/brand2.jfif'


const RightSideNav = () => {
    return (
        <div>

            {/* Button Group  */}
            <div>
                <ButtonGroup vertical className='w-100' >
                    <Button variant='outline-primary' className="mb-1"> <FaGoogle /> Log in with Google</Button>
                    <Button variant="outline-dark"> <FaGithub /> Log in with Github</Button>
                </ButtonGroup>
            </div>

            {/* List Group  */}
            <div className='my-4'>
                <h4>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item className='mb-3'> <FaFacebook /> Facebook  </ListGroup.Item>
                    <ListGroup.Item className='mb-3'> <FaWhatsapp /> Whats app</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitter /> Twitwer </ListGroup.Item>
                    <ListGroup.Item className='mb-3'> <FaTwitch /> Twich </ListGroup.Item>
                    <ListGroup.Item className='mb-3'> <FaDiscord /> Discored </ListGroup.Item>
                </ListGroup>
            </div>

            <div>


                {/* Currosel Part  */}
                <Carousel>
                    <Carousel.Item interval={1500}>
                        <img
                            className="d-block w-100"
                            src={img1}
                            style={{ height: '174px', objectFit: 'cover' }}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src={img2}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default RightSideNav;