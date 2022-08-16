import React from 'react';

const Button = ({handleClick}) => {
    return (
        <button className='btn' type='button' onClick={handleClick}>
            Clear All
        </button>
    );
}

export default Button;
