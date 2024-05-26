import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addResource, setToInitials } from '../actions';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const ItemDetailsForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {addRourceLoader, addResourceError, addResourceSuccess} = useSelector(state => {
    return state
  });

  const [formState, setFormState] = useState({
    itemTitle: '',
    link: '',
    iconUrl: '',
    tagName: 'Resource',
    category: '',
    description: '',
  });
  const [disableButton, setDisableButton] = useState(true);
  const disabledButtonStyle = {
    color: disableButton ? "black" : "white",
    backgroundColor: disableButton ? "" : "#0B69FF"
  }
  useEffect(() => {
    dispatch(setToInitials())
  },[dispatch])
  useEffect(() => {
    if(addResourceError)
      toast.error("Error occuured while creating a resource!")
    if(addResourceSuccess) {
      toast.success("Resource Created Successfuly!");
    }
    dispatch(setToInitials())
  },[addResourceError, addResourceSuccess])

  useEffect(() => {
    const {itemTitle, link, iconUrl, tagName, category, description} = formState;
    if(itemTitle && link && iconUrl && tagName && category && description) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [formState])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addResource())
  };

  return (
    <div className='add-item'>
      <p style={{color: "#7E858E", marginLeft: "20px", cursor: "pointer"}} onClick={() => {navigate("/home")}}>back</p>
      <i className="fa fa-angle-left" aria-hidden="true"></i>
      <form onSubmit={handleSubmit}>
        <h1 style={{alignSelf: "center", margin: "20px"}}>Item Details</h1>
        <div className='formGroup'>
          <label>ITEM TITLE</label>
          <input
            type="text"
            name="itemTitle"
            value={formState.itemTitle}
            onChange={handleChange}
          />
        </div>
        <div className='formGroup'>
          <label>LINK</label>
          <input
            type="text"
            name="link"
            value={formState.link}
            onChange={handleChange}
          />
        </div>
        <div className='formGroup'>
          <label>ICON URL</label>
          <input
            type="text"
            name="iconUrl"
            value={formState.iconUrl}
            onChange={handleChange}
          />
        </div>
        <div className='formGroup'>
          <label>TAG NAME</label>
          <select
            name="tagName"
            value={formState.tagName}
            onChange={handleChange}
          >
            <option value="Resource">Resource</option>
            <option value="User">User</option>
            <option value="Request">Request</option>
          </select>
        </div>
        <div className='formGroup'>
          <label>CATEGORY</label>
          <input
            type="text"
            name="category"
            value={formState.category}
            onChange={handleChange}
          />
        </div>
        <div className='formGroup'>
          <label>DESCRIPTION</label>
          <textarea
            name="description"
            value={formState.description}
            onChange={handleChange}
          />
        </div>
        <button disabled={disableButton} style={disabledButtonStyle} type="submit">{addRourceLoader ? "Saving..." : "CREATE" }</button>
      </form>
    </div>
  );
};

export default ItemDetailsForm;
