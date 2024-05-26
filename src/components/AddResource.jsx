import React from 'react';
import ItemDetailsForm from './ItemDetailsForm';
import bacgroundImage from "../assets/background.png"
const AddResource = () => {
    return <div className='add-item-layout'>
        <ItemDetailsForm />
        <img style={{width: "50%", height: "100vh"}} src={bacgroundImage} alt='img' />
    </div>;
}

export default AddResource;