import React from 'react';

const Form = () => {
    return (
        <form>
            <label>Pet Name</label>
            <input 
                type='text'
                className='u-full-width'
                placeholder='Pet Name'
            />
            <label>Owner Name</label>
            <input 
                type='text'
                className='u-full-width'
                placeholder='Owner Name'
            />
            <label>Date</label>
            <input 
                type='date'
                className='u-full-width'
            />
            <label>Hour</label>
            <input 
                type='time'
                className='u-full-width'
            />
            <label>Symptoms</label>
            <textarea
                className='u-full-width'
            ></textarea>
            <button
                className='button-primary u-full-width'
                type='submit'
            >Add Appointment</button>
        </form> 

     );
}
 
export default Form;