import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Counter from '../Counter/Counter';
import Review from '../Review/Review';
import Tours from '../Tours/Tours';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Tours></Tours>
            <Counter></Counter>
            <Review></Review>
        </div>
    );
};

export default Home;