import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Banner from '../Home/Banner/Banner';
import { useForm } from 'react-hook-form';
import './Login.css';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const { signInWithGoogle, setIsLoading } = useAuth();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/home';
    const history = useHistory();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
            .finally(() => setIsLoading(false))
    }
    return (
        // login section 
        <>
            <div className="no-banner-section">
                <Banner></Banner>
            </div>

            <Container className="py-5">
                <Row>
                    <Col md={{ span: 8, offset: 2 }} className="p-2">
                        <div>

                            <Card className="login-card ">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="col-md-5">
                                        <img src="https://iili.io/E2P0wg.jpg" alt="" className="img-fluid" />
                                    </div>
                                    <div className="col-md-7 px-4 ">
                                        <div className="travel form login-form animate__animated animate__fadeInUp">
                                            <form>
                                                <div>

                                                    <input defaultValue="" placeholder="Your Name" {...register("name", { required: true })} />
                                                </div>
                                                <div>
                                                    <input placeholder="Email" type="email" defaultValue="" {...register("email", { required: true })} />

                                                </div>
                                                <div>
                                                    <input placeholder="Password" type="password" defaultValue="" {...register("password", { required: true })} />
                                                </div>
                                                <input className="travel-btn login-btn" type="submit" value="Register" />
                                            </form>
                                        </div>
                                        <div className="text-center py-3">
                                            <small>Or Continue With</small>
                                            <p onClick={handleGoogleSignIn} style={{ fontSize: "25px" }}><FcGoogle /></p>
                                        </div>
                                        <div className="text-center">
                                            <small>Already have an account?<button className="btn btn-link">Register</button></small>
                                        </div>
                                    </div>
                                </div>
                            </Card>

                        </div>

                    </Col>
                </Row>

            </Container >
        </>
    );
};

export default Login;