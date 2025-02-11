import React from 'react';

const Input = ({ email, password, setEmail, setPassword }) => {
  return (
    <label className="form-control w-full max-w-xs">
      <div className="my-5">
        <div className="label">
          <span className="label-text">Email</span>
        </div>
        <input
          type="text"
          value={email}
          className="input input-bordered w-full max-w-xs py-5"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <div className="label">
          <span className="label-text">Password</span>
        </div>
        <input
          type="text"
          value={password}
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
    </label>
  );
};

export default Input;
