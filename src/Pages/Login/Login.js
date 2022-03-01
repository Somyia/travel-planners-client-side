import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Banner from '../Home/Banner/Banner';
import { useForm } from 'react-hook-form';
import './Login.css';

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
                    <Col md={{ span: 6, offset: 3 }}>
                        <Card className="login-card">
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
                                    <input className="travel-btn login-btn" type="submit" value="Login" />
                                </form>
                            </div>
                        </Card>
                    </Col>
                </Row>

            </Container >
        </>
    );
};

export default Login;