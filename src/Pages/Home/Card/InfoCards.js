import React from 'react';
import img1 from '../../../assets/icons/clock.svg'
import img2 from '../../../assets/icons/marker.svg'
import img3 from '../../../assets/icons/phone.svg'

const InfoCards = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-4 text-white'>
            <div className='bg-gradient-to-r from-cyan-400 to-cyan-500 flex items-center justify-evenly p-3 rounded-md'>
                <div className='mr-3'>
                    <img src={img1} alt="" />
                </div>
                <div>
                    <h1>Opening Time</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
            </div>
            <div className='bg-gradient-to-r from-slate-800 to-slate-900 flex items-center justify-evenly p-3 rounded-md'>
                <div className='mr-3'>
                    <img src={img2} alt="" />
                </div>
                <div>
                    <h1>Visit Our Office</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
            </div>
            <div className='bg-gradient-to-r from-cyan-400 to-cyan-500 flex items-center justify-evenly p-3 rounded-md'>
                <div className='mr-3'>
                    <img src={img3} alt="" />
                </div>
                <div>
                    <h1>Call Us Now</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCards;