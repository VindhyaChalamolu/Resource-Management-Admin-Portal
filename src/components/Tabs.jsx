
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedTagName } from '../actions';

const Tabs = () => {
    const dispatch = useDispatch();
    const [selectedTab, setSelectedTab] = useState('all');
    const selectedButtonStyle = {backgroundColor: "#0B69FF", color: "white"};
    const defaultButtonStyle = {color: "black"};

    const filterResources = (tag) => {
        setSelectedTab(tag);
        dispatch(setSelectedTagName(tag));
    }

    return (
        <div className='tabs flex'>
            <button className='bt1' style={selectedTab === 'all' ? selectedButtonStyle : defaultButtonStyle} onClick={() => filterResources('all')}>Resources</button>
            <button style={selectedTab === 'request' ? selectedButtonStyle : defaultButtonStyle} onClick={() => filterResources('request')}>Requests</button>
            <button className='bt3' style={selectedTab === 'user' ? selectedButtonStyle : defaultButtonStyle} onClick={() => filterResources('user')}>Users</button>
        </div>
    )
}

export default Tabs;