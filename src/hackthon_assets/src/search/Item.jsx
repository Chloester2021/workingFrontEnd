import React from 'react';

function Item({ person }) {
    return (
        <div>

            <h2>{person.name}</h2>
            <p>{person.text}</p>

        </div>
    );
}

export default Item;