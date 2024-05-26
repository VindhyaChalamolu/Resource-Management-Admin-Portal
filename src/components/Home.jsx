import React from 'react';
import Tabs from './Tabs';
import Searchbar from './Searchbar';
import Resources from './Resources';

const Home = () => {
    return (
        <div className='home'>
            <Tabs />
            <Searchbar />
            <Resources />
        </div>
    )
}

export default Home;