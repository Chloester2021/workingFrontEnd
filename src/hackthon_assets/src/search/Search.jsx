import React, { useState } from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';


function Search({ data }) {

    const [searchField, setSearchField] = useState("");
    const [searchShow, setSearchShow] = useState(false);

    const filteredPersons = [...data].reverse().filter(
        person => {
            return (
                person
                    .user_self_id
                    .toLowerCase()
                    .includes(searchField.toLowerCase()) ||
                person
                    .text
                    .toLowerCase()
                    .includes(searchField.toLowerCase())
            );
        }
    );

    const handleChange = e => {
        setSearchField(e.target.value);
        if (e.target.value === "") {
            setSearchShow(false);
        }
        else {
            setSearchShow(true);
        }
    };

    function searchList() {
        if (searchShow) {
            return (
                <Scroll>
                    <SearchList filteredPersons={filteredPersons} />
                </Scroll>
            );
        }
    }

    return (
        <section>
            <div>
                <input
                    type="search"
                    placeholder="Search"
                    onChange={handleChange}
                />
            </div>
            {searchList()}
        </section>

    );
}

export default Search;