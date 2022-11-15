import React, { useState } from 'react';
import chair from '../../assets/images/chair.png'
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';

const AppmntBanner = () => {

    const [selectedDate, setSelectedDate] = useState(new Date())
    let footer = <p>Please select a date</p>
    if(selectedDate){
        footer = <p>You picked {format(selectedDate, 'PPP')}.</p>;
    }

    return (
        <div className="hero a p-2 md:px-5 md:py-10">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className='w-full p-2 md:w-1/2'>
                    <DayPicker
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        footer={footer}
                    ></DayPicker>
                </div>
                <img src={chair} alt='appointment-banner' className="w-full md:w-1/2 rounded-lg shadow-2xl" />
            </div>
        </div>
    );
};

export default AppmntBanner;