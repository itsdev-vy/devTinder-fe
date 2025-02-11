import React, { useState } from 'react';
import Input from '../input/Input';
import axios from 'axios';

const Card = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8000/login',
        {
          emailId: email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        console.log('Login successful');
        setEmail('');
        setPassword('');
      }
    } catch (error) {
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
