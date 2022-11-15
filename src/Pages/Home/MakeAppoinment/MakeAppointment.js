import React from 'react';
import doctorImg from '../../../assets/images/doctor.png'
const MakeAppointment = () => {
    return (
        <div className='mt-32 flex flex-col-reverse md:flex-row justify-evenly items-center appointment p-2'>
            <img src={doctorImg} className='w-full md:w-1/2 -mt-28 hidden md:block' alt="" />
            <div className='w-full md:w-1/2'>
                <h1 className='text-cyan-600 text-xl font-semibold'>Make Appoinment</h1>
                <h1 className='text-4xl text-white'>Make an appointment Today</h1>
                <p className='text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web pag</p>
                <button className='py-2 px-5 bg-gradient-to-r from bg-cyan-400 to-cyan-600 text-white my-3 rounded-md'>Get Started</button>
            </div>
        </div>
    );
};

export default MakeAppointment;