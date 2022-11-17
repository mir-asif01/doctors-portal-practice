import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Card from './Card';
import BookingModal from './BookingModal';

const AvailableAppoinments = ({selectedDate,setSelectedDate}) => {

    const [appmntOptions,setAppmntOPtions] = useState([])
    const [treatment,setTreatment] = useState({});
    useEffect(()=>{
        fetch('appmntOptions.json')
        .then(res=>res.json())
        .then(data=>setAppmntOPtions(data))
    },[])

    return (
        <div className='my-14 mx-7'>
            <h1 className='text-cyan-500 text-center'>Available Appointments on {format(selectedDate,'PPP')}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    appmntOptions.map(option=><Card key={option._id} setTreatment={setTreatment} option={option}></Card>)
                }
                <BookingModal treatment={treatment} selectedDate={selectedDate}></BookingModal>
            </div>
        </div>
    );
};

export default AvailableAppoinments;