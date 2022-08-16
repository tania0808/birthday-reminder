import React from 'react';

const Item = ({ name, age, image}) => {
    return (
        <article className='person'>
            <img src={image} alt="name" className='avatar' width={75} height={75} />
            <div className="infos">
                <h4>{name}</h4>
                <span>{age} years</span>
            </div>
        </article>
    );
}

export default Item;
