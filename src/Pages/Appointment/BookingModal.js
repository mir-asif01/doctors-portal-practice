import React from 'react';
import { format } from 'date-fns'

const BookingModal = ({ treatment, selectedDate }) => {
    const { name,slots } = treatment
    const date = format(selectedDate, 'PPP')
    return (
        <>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form>
                        <input type="text" defaultValue={date} disabled placeholder="Type here" className="input input-bordered w-full my-1" />
                        <select className="select select-bordered w-full">
                            <option>Select Time</option>
                            {
                                slots.map(slot=><option>{slot}</option>)
                            }
                        </select>
                        <input type="text" placeholder="Name" className="input input-bordered w-full my-1" />
                        <input type="email" placeholder="Email Address" className="input input-bordered w-full my-1" />
                        <input type="text" placeholder="Phone Number" className="input input-bordered w-full my-1" />
                        <br />
                        <button className='bg-slate-700 py-2 px-5 rounded-md text-white w-full mt-2'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;