import React, { useState } from 'react';
import { Carousel, Container, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import { NavLink } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="banner-area">
            {/* header-bottom area  */}
            <Navbar className="header-bottom" expand="lg">
                <Container>
                    <Navbar.Brand className="animate__animated animate__slideInUp" href="#">TRAVEL Planners</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0 animate__animated animate__slideInUp"

                            navbarScroll
                        >
                            <Nav.Link href="/home">Home</Nav.Link>

                            {user.uid ?
                                <>
                                    <Nav.Link href="/myOrders">My Orders</Nav.Link>
                                    <Nav.Link href="/manageOrders">Manage All Order</Nav.Link>
                                    <Nav.Link href="/newService">New Service</Nav.Link>


                                    <NavLink to="/home">
                                        <button className="btn text-white" onClick={logOut}>LogOut</button>
                                    </NavLink>
                                    <Nav.Link href="/newService"><img className="user-image" src={user?.photoURL} />   {user.displayName}</Nav.Link>
                                </> :
                                <Nav.Link href="/login">Login</Nav.Link>
                            }
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* banner area */}
            <div className="banner">
                <Carousel>
                    {/* single banner  */}
                    <Carousel.Item interval={5000} className="single-slide">
                        <img
                            className="d-block w-100 img-fluid"
                            src="https://i.ibb.co/ZgH4wyn/banner-1.jpg"
                            alt="First slide"
                        />
                        <div className="overlay">
                        </div>
                        <Carousel.Caption className="slide-info">
                            <div>

                                <h1 className="animate__animated animate__slideInRight">Enjoy The Travel With <br />Travel Planners.</h1>
                                <p className="animate__animated animate__slideInUp">A journey of a 1000 miles starts with a single step. Import the full demo content with 1 click and create a head-turning website for your travel agency.</p>

                            </div>
                        </Carousel.Caption>

                    </Carousel.Item>
                    <Carousel.Item interval={5000} className="single-slide">
                        {/* single banner  */}
                        <img
                            className="d-block w-100 img-fluid"
                            src="https://i.ibb.co/ZgH4wyn/banner-1.jpg"
                            alt="Second slide"
                        />
                        <div className="overlay">
                        </div>
                        <Carousel.Caption className="slide-info">
                            <div>

                                <h1 className="animate__animated animate__slideInRight">Life is Short and <br />The World is Wide.</h1>
                                <p className="animate__animated animate__slideInUp">A journey of a 1000 miles starts with a single step. Import the full demo content with 1 click and create a head-turning website for your travel agency.</p>

                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000} className="single-slide">
                        {/* single banner  */}
                        <img
                            className="d-block w-100 img-fluid"
                            src="https://i.ibb.co/ypZB7ZP/banner-3.jpg"
                            alt="Third slide"
                        />
                        <div className="overlay">
                        </div>
                        <Carousel.Caption className="slide-info">
                            <div>

                                <h1 className="animate__animated animate__slideInRight">Get Ready to Travel <br />The World.</h1>
                                <p className="animate__animated animate__slideInUp">A journey of a 1000 miles starts with a single step. Import the full demo content with 1 click and create a head-turning website for your travel agency.</p>

                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

        </div>
    );
};

export default Banner;