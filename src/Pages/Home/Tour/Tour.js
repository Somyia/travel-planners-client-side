import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Tour.css';

const Tour = (props) => {
    const { _id, name, desc, price, img, fromDate, toDate } = props.tour;

    return (
        // single tour section 
        <div className="col-md-4 card-style">
            <Card className="animate__animated animate__slideInUp border-0 m-0">
                <div className="tour-card-top" >
                    <div className="tour-card-img">
                        <Card.Img style={{ height: '350px' }} className="img-fluid" variant="top" src={img} />
                    </div>

                    <div className="tour-card-title">
                        <Card.Title className="tour-title" variant="bottom">{name}</Card.Title>
                        <div className="tour-card-body">
                            <Card.Body>
                                <small className="muted my-2"><i className="far fa-calendar-alt"></i>  {fromDate} TO {toDate}</small>
                                <Card.Text className="mt-2">
                                    {desc.slice(0, 100)}
                                </Card.Text>
                                <h5>Price : ${price}</h5>
                            </Card.Body>
                            <Card.Footer>
                                <Link to={`/tours/${_id}`}>
                                    <button className="btn travel-btn tour-card-btn">Book Now</button>
                                </Link>
                            </Card.Footer>
                        </div>
                    </div>

                </div>



            </Card>
        </div >
    );
};

export default Tour;