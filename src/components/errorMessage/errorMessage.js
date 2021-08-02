import React from 'react';
import './errorMessage.css';
import img from './img/error.jpg';

const ErrorMessage = () => {
    return (
        <>
            <div className='container d-flex justify-content-center m-3'>
                <img src={img} alt='error'></img>
            </div>
            <p className="text-center text-light fs-2 bg-dark p-4">Something goes wrong :(</p>
        </>
    )
}

export default ErrorMessage; 