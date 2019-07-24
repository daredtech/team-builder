import React, {useState} from 'react';

const Form = () => {
    console.log('the form was called');
    return (
        <div className='form'> 
        Form
            {/* input for name */}
            <div className='form-field'>
                <label htmlFor="nameInput"> Name: </label>
                <input
                type='text'
                className='form-input'
                name='name'
                placeholder='Enter your name'
                />
            </div>

            {/* input for email */}
           <div className='form-field'>
                <label htmlFor="emailInput"> Email: </label>
                <input
                type='email'
                className='form-input'
                name='email'
                placeholder='Enter your email'
                />
            </div>
            
            {/* input for role */}
            <div className='form-field'>
                <label htmlFor="roleInput"> Role: </label>
                <input
                type='text'
                className='form-input'
                name='role'
                placeholder='Enter your role'
                />
            </div>



        </div>
    )
    
} 

export default Form;