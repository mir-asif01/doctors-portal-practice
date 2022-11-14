import React from 'react';
import img from '../../../assets/images/doctor-small.png'
const SecondBanner = () => {
    return (
        <div className='flex justify-between items-center my-10'>
           <img src={img} className='md:w-1/2 w-full' alt="" />
           <div className='md:w-1/2 w-full'>
                <h1 className='text-4xl'>Exceptional Dental Care, on Your Terms</h1>
                <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                </p>
                <button className='py-2 px-5 bg-gradient-to-r from bg-cyan-400 to-cyan-600 text-white my-3 rounded-md'>Get Started</button>
           </div>
        </div>
    );
};

export default SecondBanner;