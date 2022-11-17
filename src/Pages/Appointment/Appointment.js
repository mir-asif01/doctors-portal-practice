import React, { useState } from 'react';
import AppmntBanner from './AppmntBanner';
import AvailableAppoinments from './AvailableAppoinments';

const Appointment = () => {

    const [selectedDate, setSelectedDate] = useState(new Date())

    return (
        <div>
            <AppmntBanner selectedDate={selectedDate} setSelectedDate={setSelectedDate} ></AppmntBanner>
            <AvailableAppoinments selectedDate={selectedDate} setSelectedDate={setSelectedDate}></AvailableAppoinments>
        </div>
    );
};

export default Appointment;