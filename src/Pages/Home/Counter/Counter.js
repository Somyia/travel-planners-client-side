import React from 'react';
import { Carousel, Container, Row, Card } from 'react-bootstrap';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import './Counter.css';

const Counter = () => {
    return (
        <div className="countup-section my-lg-5 my-3  animate__animated animate__slideInUp">
            <Container id="counter" className="">

                <Row>

                    <Card className="countup-card">
                        <Row>
                            <div className="col-md-3 single-countup">
                                <h1> <CountUp end={23} redraw={true}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>K+
                                </h1>
                                <h6>Satisfied Customer</h6>
                            </div>
                            <div className="col-md-3 single-countup">
                                <h1> <CountUp end={15} redraw={true}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>K+
                                </h1>
                                <h6>Active Customer</h6>
                            </div>
                            <div className="col-md-3  single-countup">
                                <h1> <CountUp end={125} redraw={true}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>+
                                </h1>
                                <h6>Travel Destiantion</h6>
                            </div>
                            <div className="col-md-3  single-countup">
                                <h1> <CountUp end={40} redraw={true}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>+
                                </h1>
                                <h6>Travel Guide</h6>

                            </div>

                        </Row>
                    </Card>


                </Row>
            </Container>
        </div >

    );
};

export default Counter;