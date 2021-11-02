import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

    return (
        <div>
            {/* top header area  */}
            <Navbar id="home" className="top-header " expand="lg">
                <Container>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 animate__animated animate__slideInUp"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#" className="link">
                                <FontAwesomeIcon icon={faEnvelope} /> mailto@travel_planner.com
                            </Nav.Link>
                            <Nav.Link href="#">
                                <FontAwesomeIcon icon={faPhoneAlt} /> +880 3454 435 535
                            </Nav.Link>
                        </Nav>
                        <Nav
                            className="ms-auto my-2 my-lg-0 animate__animated animate__slideInUp top-header-right"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
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
                                <i class="fab fa-youtube"></i>
                            </Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>
    );
};

export default Header;