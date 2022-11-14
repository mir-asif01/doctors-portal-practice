import React from 'react';
import Banner from '../Banner/Banner';
import SecondBanner from '../Banner/SecondBanner';
import InfoCards from '../Card/InfoCards';
import MakeAppointment from '../MakeAppoinment/MakeAppointment';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <SecondBanner></SecondBanner>
            <MakeAppointment></MakeAppointment>
        </div>
    );
};

export default Home;