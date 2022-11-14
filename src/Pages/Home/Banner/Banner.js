import React from 'react';
import bannerImg from '../../../assets/images/chair.png'
const Banner = () => {
    return (
        <div className="hero px-5 py-10">
            <div className="hero-content flex-col justify-between items-center lg:flex-row-reverse">
                <img src={bannerImg} className="md:w-1/2 w-full rounded-lg shadow-2xl" alt='' />
                <div className='md:w-1/2 w-full'>
                    <h1 className="text-4xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                    <button className="py-2 px-5 bg-cyan-400 text-white rounded-md">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;