import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Banner from '../Home/Banner/Banner';
const Login = () => {
    const { signInWithGoogle } = useAuth();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/home';
    const history = useHistory();

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        // login section 
        <>
            <div className="no-banner-section">
                <Banner></Banner>
            </div>

            <Container className="py-5">
                <Row>
                    <div className="title text-center" >
                        <h1>Please Login</h1>
                        <button className="btn travel-btn mt-4" onClick={handleGoogleSignIn}>Google Sign In</button>
                    </div>
                </Row>

            </Container >
        </>
    );
};

export default Login;