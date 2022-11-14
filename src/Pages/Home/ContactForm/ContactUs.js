import React from 'react';

const ContactUs = () => {
    return (
        <div className='appointment p-2 md:p-5 mt-16'>
            <div className='w-full md:w-3/6 mx-auto text-center'>
                <h1 className='text-cyan-400 font-bold'>Contact Us</h1>
                <h1 className='text-3xl text-white'>Stay connected with us</h1>
                <div className='flex flex-col text-center'>
                    <input type="text" className='my-2 p-2 rounded-md' placeholder='Your Email' />
                    <input type="text" className='my-2 p-2 rounded-md' placeholder='Your Subject' />
                    <textarea name="" placeholder='Message' className='my-2 p-2 rounded-md' id="" cols="30" rows="5"></textarea>
                </div>
                    <button className='py-2 px-5 bg-gradient-to-r from bg-cyan-400 to-cyan-600 text-white my-3 rounded-md'>Submit</button>
            </div>
        </div>
    );
};

export default ContactUs;