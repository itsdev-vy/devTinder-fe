import React, { useState } from 'react';
import Input from '../input/Input';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/slice/user/userSlice';
import { useNavigate } from 'react-router';
import { BASE_URL } from '../../utils/constants';

const Card = () => {
  const [email, setEmail] = useState('akshay@namste.com');
  const [password, setPassword] = useState('Saini@123');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        BASE_URL + '/login',
        {
          emailId: email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      dispatch(addUser(response?.data?.data));
      navigate('/');
      setEmail('');
      setPassword('');
    } catch (error) {
      setError(error?.response?.data?.error);
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <div className="py-5">
            <Input
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
          </div>
          <div className="card-actions justify-center">
            <span className="text-red-600">{error}</span>
            <button className="btn btn-primary w-full" onClick={handleSubmit}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
