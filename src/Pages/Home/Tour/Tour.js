import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Tour.css';

const Tour = (props) => {
    const { _id, name, desc, price, img, fromDate, toDate } = props.tour;

    return (
        // single tour section 
        <div className="col-md-4 card-style">
            <Card className="animate__animated animate__slideInUp">
                <Card.Img style={{ height: '200px' }} variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <small className="muted mb-3"><i className="far fa-calendar-alt"></i>  {fromDate}-{toDate}</small>
                    <Card.Text className="mt-3">
                        {desc}
                    </Card.Text>
                    <h5>Price : ${price}</h5>
                </Card.Body>
                <Card.Footer>
                    <Link to={`/tours/${_id}`}>
                        <button className="btn travel-btn">Book Now</button>
                    </Link>
                </Card.Footer>
            </Card>

            {/* <img src= alt="" />
            <h2></h2>
            <p></p>
            <h5></h5>
             */}
        </div >
    );
};

export default Tour;