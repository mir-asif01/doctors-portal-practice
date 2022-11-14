import React from 'react';
import bannerImg from '../../../assets/images/chair.png'
const Banner = () => {
    return (
        <div className="hero px-5 py-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={bannerImg} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-4xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;