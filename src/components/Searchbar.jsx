import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearSearch, setFilteredResources } from '../actions';

const Searchbar = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.resources);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);

        const filtered = data.filter(item =>
            item.title.toLowerCase().includes(query)
        );
        if(query) {
            dispatch(setFilteredResources(filtered));
        } else {
            dispatch(clearSearch());
        }
    };

  return (
    <div className='searchbar'>
        <input type="text" placeholder="Search" className="search-bar" value={searchQuery}
            onChange={handleSearch} />
    </div>
    )
}
export default Searchbar;