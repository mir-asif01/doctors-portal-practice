import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../Card/InfoCards';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
        </div>
    );
};

export default Home;