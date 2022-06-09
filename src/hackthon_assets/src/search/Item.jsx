import React from 'react';

function Item({ person }) {
    return (
        <div>

            <h2>{person.user_self_id}</h2>
            <p>{person.text}</p>

        </div>
    );
}

export default Item;