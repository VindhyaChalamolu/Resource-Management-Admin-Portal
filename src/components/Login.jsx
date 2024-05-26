// Login.js
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import '../App.css';

function Login() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(true);

  const navigate = useNavigate();
  const validateIndianPhoneNumber = (phoneNumber) => {
    const regex = /^[6-9]\d{9}$/;
    return regex.test(phoneNumber);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setPhoneNumber(value);
    setIsValid(validateIndianPhoneNumber(value));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid && password) {
      toast.success("Login Sucessfull!");
      navigate('/home');
    } else if(!isValid) {
      toast.error('Invalid Phone number');
    } else if(!password) {
      toast.error('Password is mandatory');
    }
    else {
      toast.error('Invalid Credentails');
    }
  };

  return (
    <div className="form-container">
      <h2 style={{alignSelf: "center"}}>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" value={phoneNumber} onChange={(e) => handleChange(e)} placeholder='Phone' />
        </div>
        <div className="form-group">
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default Login;
