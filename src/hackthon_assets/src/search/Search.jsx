import React, { useState } from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';


function Search({ data }) {

    const [searchField, setSearchField] = useState("");
    const [searchShow, setSearchShow] = useState(false);

    const filteredPersons = data.filter(
        person => {
            return (
                person
                    .name
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
        <section className="garamond">
            <div className="navy georgia ma0 grow">
                {/* <h2 className="f2">Search</h2> */}
            </div>
            <div className="pa2">
                <input
                    className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
                    type="search"
                    placeholder="Search People"
                    onChange={handleChange}
                />
            </div>
            {searchList()}
        </section>

    );
}

export default Search;