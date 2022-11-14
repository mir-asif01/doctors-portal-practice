import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Card from './Card';
const Services = () => {

    const services = [
        {
            id : 1,
            title : 'Fluoride Treatment',
            desc : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, iste.',
            img : fluoride
        },
        {
            id : 2,
            title : 'Cavity Filling',
            desc : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, iste.',
            img : cavity
        },
        {
            id : 3,
            title : 'Teeth Whitening',
            desc : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, iste.',
            img : whitening
        }
    ]

    return (
        <div className='my-8'>
            <h1 className='text-cyan-500 text-xl font-bold text-center'>Our Services</h1>
            <h1 className='text-4xl text-center'>Services We Provide</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 p-3'>
                {
                    services.map(service=><Card key={service.id} service={service}></Card>)
                }
            </div>
        </div>
    );
};

export default Services;