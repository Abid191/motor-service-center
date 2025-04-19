import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../AllServices/Services';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default HomePage;