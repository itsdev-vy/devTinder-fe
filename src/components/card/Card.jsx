import React, { useState } from 'react';
import Input from '../input/Input';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/slice/user/userSlice';
import { useNavigate } from 'react-router';
import { BASE_URL } from '../../utils/constants';

const Card = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
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

  const handleSignup = async () => {
    try {
      const response = await axios.post(
        BASE_URL + '/signup',
        {
          firstName,
          lastName,
          emailId: email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      dispatch(addUser(response?.data?.data));
      navigate('/profile');
      setFirstName('');
      setLastName('');
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
          <h2 className="card-title justify-center">
            {isLoginForm ? 'Login' : 'Sign Up'}
          </h2>
          <div className="py-5">
            <Input
              firstName={firstName}
              setFirstName={setFirstName}
              lastName={lastName}
              setLastName={setLastName}
              isLoginForm={isLoginForm}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
          </div>
          <div className="card-actions justify-center">
            <span className="text-red-600">{error}</span>
            <button
              className="btn btn-primary w-full"
              onClick={isLoginForm ? handleLogin : handleSignup}
            >
              {isLoginForm ? 'Login' : 'Register'}
            </button>
            <p
              className="m-auto flex justify-center my-3 hover:underline text-blue-400 cursor-pointer"
              onClick={() => setIsLoginForm(!isLoginForm)}
            >
              {isLoginForm
                ? "Don't have an account? Sign Up here"
                : 'Already have an account? Login here'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
