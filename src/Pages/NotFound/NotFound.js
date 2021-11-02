import React from 'react';
import { Container, Row } from 'react-bootstrap';

const NotFound = () => {
    return (
        <Container className="py-lg-5 py-3">
            <Row>
                <div className="title">
                    <h1>No Page Found</h1>
                </div>
            </Row>
        </Container>
    );
};

export default NotFound;