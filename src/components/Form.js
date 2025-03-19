import React from 'react';

const Form = ({appointment, updateAppointment}) => {

    const { pet, owner, date, hour, symptoms } = appointment;

    const submitForm = (e) => {
        e.preventDefault();
        console.log('submit de formulario');
    }

    return (
        <form
            onSubmit={submitForm}>
            <label>Pet Name</label>
            <input 
                type='text'
                className='u-full-width'
                placeholder='Pet Name'
                name='pet'
                value={pet}
                onChange={updateAppointment}
            />
            <label>Owner Name</label>
            <input 
                type='text'
                className='u-full-width'
                placeholder='Owner Name'
                name='owner'
                value={owner}
                onChange={updateAppointment}
            />
            <label>Date</label>
            <input 
                type='date'
                className='u-full-width'
                name='date'
                value={date}
                onChange={updateAppointment}
            />
            <label>Hour</label>
            <input 
                type='time'
                className='u-full-width'
                name='hour'
                value={hour}
                onChange={updateAppointment}
            />
            <label>Symptoms</label>
            <textarea
                className='u-full-width'
                name='symptoms'
                value={symptoms}
                onChange={updateAppointment}
            ></textarea>
            <button
                className='button-primary u-full-width'
                type='submit'
            >Add Appointment</button>
        </form> 

     );
}
 
export default Form;