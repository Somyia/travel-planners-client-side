import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        // about us area 
        <Container id="about" className="py-lg-5 py-3">
            <Row>
                <div className="title">
                    <h1>About Travel Planners</h1>
                </div>
            </Row>
            <Row className="mt-lg-4 mt-2">
                <div className="col-md-6">
                    <div className="about-image animate__animated animate__slideInLeft">
                        <img className="img-fluid" src="https://i.ibb.co/g4MDkjH/about-big-image.jpg" alt="" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="about-text animate__animated animate__slideInRight">
                        <h3>Plan Your Trip with Us</h3>
                        <p>
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic. Italic Mountains, she had a last view back on the skyline
                    </p>
                        <button className="btn travel-btn">Read More</button>
                    </div>
                </div>
            </Row>
        </Container>
    );
};

export default About;