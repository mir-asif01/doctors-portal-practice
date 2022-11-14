import React from 'react';

const Card = ({ review }) => {
    const {name, desc, img,loc } = review
    return (
        <div className='p-3 shadow-md rounded-md'>
            <p>{desc}</p>
            <div className='flex justify-start items-center mt-3'>
                <img src={img} className='w-16' alt="" />
                <div className='flex flex-col justify-evenly items-center ml-2'>
                    <h1>{name}</h1>
                    <p>{loc}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;