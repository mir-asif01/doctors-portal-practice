import React from 'react';

const Card = ({service}) => {
    const {title,img,desc} = service
    return (
        <div className='flex flex-col justify-center items-center text-center p-4 mt-8 shadow-md rounded-md'>
            <img src={img} className='h-14 w-14 mb-2' alt="" />
            <div>
                <h1>{title}</h1>
                <p>{desc}</p>
            </div>
        </div>
    );
};

export default Card;