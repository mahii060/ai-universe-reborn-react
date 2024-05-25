/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';

const Button = ({ children }) => {
    return (
        <div className='text-center my-3'>
            <button className="btn btn-accent">{children}</button>
        </div>
    );
};

export default Button;