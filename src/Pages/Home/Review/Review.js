import React from 'react';
import { Carousel, Container, Row, Card } from 'react-bootstrap';
import './Review.css';

const Review = () => {
    return (

        <Container id="review" className="py-lg-5 py-3">
            <Row>
                <div className="title">
                    <h1>Customer Reviews</h1>
                </div>
            </Row>
            <Row>
                <div className="col-md-4 ">
                    <Card className="review-card animate__animated animate__slideInUp">
                        <div className="review-text">
                            <div>
                                <i class="fas fa-quote-left"></i>
                            </div>
                                The sightseeing and activities were better than we even thought! I still can’t believe we did so much in such a short time
                            </div>
                        <div className="review-card-bottom">
                            <img src="https://i.ibb.co/L1HBxD2/client.jpg" />
                            <h5>Canadian Rockies</h5>
                        </div>

                    </Card>
                </div>
                <div className="col-md-4">
                    <Card className="review-card animate__animated animate__slideInUp">
                        <div className="review-text">
                            <div>
                                <i class="fas fa-quote-left"></i>
                            </div>
                                I had a wonderful time during the trip. The guide was informative, friendly and attentive to our entire groupI had a wonderful time during the trip.
                            </div>
                        <div className="review-card-bottom">
                            <img src="https://i.ibb.co/fqYc0Np/client-2.jpg" />
                            <h5>Lake Tahoe Adventure</h5>
                        </div>

                    </Card>
                </div>
                <div className="col-md-4">
                    <Card className="review-card animate__animated animate__slideInUp">
                        <div className="review-text">
                            <div>
                                <i class="fas fa-quote-left"></i>
                            </div>
                                Always enjoyed my stay with Hilton Hotel and Resorts, top class room service and rooms have great outside views
                            </div>
                        <div className="review-card-bottom">
                            <img src="https://i.ibb.co/RQRjZRy/client-3.jpg" />
                            <h5>Roy Brown</h5>
                        </div>

                    </Card>
                </div>
            </Row>
        </Container>


    );
};

export default Review;