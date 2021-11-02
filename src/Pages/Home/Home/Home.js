import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Review from '../Review/Review';
import Tours from '../Tours/Tours';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Tours></Tours>
            <Review></Review>
        </div>
    );
};

export default Home;