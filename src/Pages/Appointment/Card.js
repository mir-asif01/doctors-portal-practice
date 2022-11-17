import React from 'react';

const Card = ({option , setTreatment}) => {
    const {name,slots} = option
    return (
        <div className='shadow-md rounded-md p-4 text-center'>
            <h1 className='text-2xl text-emerald-500 font-semibold'>{name}</h1>
            <p>{
                slots.length>0 ? slots[0] : 'Try Another Day'

            }</p>
            <label htmlFor="my-modal-3" onClick={()=>setTreatment(option)} className="mt-3 py-1 px-3 bg-gradient-to-r from bg-cyan-400 to-cyan-600 rounded-md text-white">Book Appointment</label>
        </div>
    );
};

export default Card;