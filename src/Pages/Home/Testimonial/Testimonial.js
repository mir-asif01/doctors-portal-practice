import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import p1 from '../../../assets/images/people1.png'
import p2 from '../../../assets/images/people2.png'
import p3 from '../../../assets/images/people3.png'
import Card from './Card';

const Testimonial = () => {

    const data = [
        {
            id : 1,
            name : 'Alex Hales',
            desc : 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            loc : 'California',
            img : p1
        },
        {
            id : 2,
            name : 'Alex Rossy',
            desc : 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            loc : 'California',
            img : p2
        },
        {
            id : 3,
            name : 'Alex Roveman',
            desc : 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            loc : 'California',
            img : p3
        }
    ]

    return (
        <div className='p-3'>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='text-cyan-500'>Testimonial</h1>
                    <h1 className='text-2xl'>What Our Patients Says</h1>
                </div>
                <img src={quote} className='w-48' alt="" />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                {
                    data.map(review=><Card key={review.id} review={review}></Card>)
                }
            </div>
        </div>
    );
};

export default Testimonial;