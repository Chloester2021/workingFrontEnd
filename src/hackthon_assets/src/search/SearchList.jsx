import React from 'react';
import Item from './Item';

function SearchList({ filteredPersons }) {
    const filtered = filteredPersons.map(person => <Item key={person.id} person={person} />);
    return (
        <div className='chatboard'>
            {filtered}
        </div>
    );
}

export default SearchList;