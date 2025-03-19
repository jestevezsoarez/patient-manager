import React from 'react';

const Form = () => {
    return (
        <form>
            <label>Pet Name</label>
            <input 
                type='text'
                className='u-full-width'
                placeholder='Pet Name'
                name='pet'
            />
            <label>Owner Name</label>
            <input 
                type='text'
                className='u-full-width'
                placeholder='Owner Name'
                name='owner'
            />
            <label>Date</label>
            <input 
                type='date'
                className='u-full-width'
                name='date'
            />
            <label>Hour</label>
            <input 
                type='time'
                className='u-full-width'
                name='hour'
            />
            <label>Symptoms</label>
            <textarea
                className='u-full-width'
                name='symptoms'
            ></textarea>
            <button
                className='button-primary u-full-width'
                type='submit'
            >Add Appointment</button>
        </form> 

     );
}
 
export default Form;