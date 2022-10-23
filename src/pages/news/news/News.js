import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { BsFillBookmarkFill, BsShare } from "react-icons/bs";
import { FaEye, FaHtml5, FaStar } from 'react-icons/fa';

const News = ({ news }) => {
    const { details, image_url, title, total_view, rating, author } = news;
    const { name, published_date, img } = author;
    return (
        <div>
            <Card className="mb-4">
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center'>
                        <Image src={img} style={{ height: '50px' }} roundedCircle alt="" />
                        <div className='ms-2'>
                            {name === '' || null ? <h5>NOT Found</h5> : <h5>{name}</h5>}
                            <p>{published_date}</p>
                        </div>
                    </div>
                    <div>
                        <BsFillBookmarkFill className='me-2' />
                        <BsShare /></div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url
                    } />
                    <Card.Text>
                        {
                            details.length > 250 ? <p>{details.slice(0, 250)} ..<Link to={'/news/:id'}>see more </Link></p> : details
                        }
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Card.Footer className="text-muted d-flex justify-content-between">
                    <div>
                        <FaStar className='text-warning me-2' />
                        <span>{
                            rating.number
                        }</span>
                    </div>
                    <div>
                        <FaEye className='me-2' />
                        <span>{total_view == null ? 0 : total_view}</span>
                    </div>
                </Card.Footer>
            </Card>

        </div>
    );
};

export default News;