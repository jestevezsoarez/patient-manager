import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = ({appointment, updateAppointment, addAppointment}) => {

    const [error, setError] = useState(false);

    const { pet, owner, date, hour, symptoms } = appointment;

    const submitForm = (e) => {
        e.preventDefault();

        // Validate
        if(pet.trim() === '' || owner.trim() === '' || date.trim() === '' || hour.trim() === '' || symptoms.trim() === '') {
            setError(true);
            return;
        }

        // Add id to the appointment
        setError(false);
        appointment.id = uuidv4();
    
        // Add Appointment
        addAppointment(appointment);
    
        // Reset form
        updateAppointment({
            pet: '',
            owner: '',
            date: '',
            hour: '',
            symptoms: ''
        });
    }

    return (
        <form
            onSubmit={submitForm}>
            { error ? <p className='alerta-error'>All fields are required</p> : null }
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
                className='button eliminar u-full-width'
                type='submit'
                onSubmit={submitForm}
            >Add Appointment</button>
        </form> 

     );
}
 
export default Form;