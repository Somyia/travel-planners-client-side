import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Tour from '../Tour/Tour';
import './Tours.css';


const Tours = () => {
    const [tours, setTours] = useState([]);

    useEffect(() => {
        fetch('https://guarded-crag-94849.herokuapp.com/tours')
            .then(res => res.json())
            .then(data => {
                setTours(data)
            })
    }, []);
    if (tours.length == 0) {
        return <div className="loading">
            <div className="center">
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
            </div>
        </div>
    }
    return (
        <>
            < div id="tours" >
                {/* featured tours section  */}
                < Container fluid className="py-lg-5 py-3" >
                    <Row>
                        <div className="title">
                            <h1>Featured Tours</h1>
                        </div>
                    </Row>
                    <Row className="mt-lg-4 mt-2 g-3">
                        {
                            tours.map(tour => <Tour key={tour._id} tour={tour}></Tour>)
                        }
                    </Row>
                </Container >
            </div >
        </>
    );
};

export default Tours;