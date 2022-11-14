import React from 'react';
import Banner from '../Banner/Banner';
import SecondBanner from '../Banner/SecondBanner';
import InfoCards from '../Card/InfoCards';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <SecondBanner></SecondBanner>
        </div>
    );
};

export default Home;