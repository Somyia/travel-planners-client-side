import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#121827', color: '#fff' }}>
            <Container className="py-5">
                <Row>
                    <div className="col-md-4">
                        <div className="footer-info">
                            <h3 className="band-name">Travel Planners</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="footer-menu">
                            <h3>Useful Links</h3>
                            <ul>
                                <li><a href="#home">Home</a></li>
                                <li><a href="/home#about">About</a></li>
                                <li><a href="/home#tours">Featured Tours</a></li>
                                <li><a href="/home#review">Customer Reviews</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div>
                            <h3>Contact Us</h3>
                            <Nav>
                                <Nav.Link href="#" className="link">
                                    <FontAwesomeIcon icon={faEnvelope} /> mailto@travel_planner.com
                            </Nav.Link>
                                <Nav.Link href="#">
                                    <FontAwesomeIcon icon={faPhoneAlt} /> +880 3454 435 535
                            </Nav.Link>
                            </Nav>
                            <Nav className="footer-links">
                                <Nav.Link href="#">
                                    <i className="fab fa-facebook-f"></i>
                                </Nav.Link>
                                <Nav.Link href="#">
                                    <i className="fab fa-twitter"></i>
                                </Nav.Link>
                                <Nav.Link href="#">
                                    <i className="fab fa-instagram"></i>
                                </Nav.Link>
                                <Nav.Link href="#">
                                    <i className="fab fa-pinterest-p"></i>
                                </Nav.Link>
                                <Nav.Link href="#">
                                    <i className="fab fa-youtube"></i>
                                </Nav.Link>
                            </Nav>

                        </div>
                    </div>
                </Row>
                <Row>
                    <small style={{ color: '#ccc' }} className="text-center mt-5">copyright by travel planner 2021</small>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;