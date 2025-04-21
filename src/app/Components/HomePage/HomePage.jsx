import React from 'react';
import Banner from './Banner';
import About from './About/page';
import Services from './Servicees/page';

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