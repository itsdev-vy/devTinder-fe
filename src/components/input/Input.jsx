import React from 'react';

const Input = ({
  firstName,
  lastName,
  isLoginForm,
  email,
  password,
  setFirstName,
  setLastName,
  setEmail,
  setPassword,
}) => {
  return (
    <label className="form-control w-full max-w-xs">
      {!isLoginForm ? (
        <>
          <div className="my-5">
            <div className="label">
              <span className="label-text">First Name</span>
            </div>
            <input
              type="text"
              value={firstName}
              className="input input-bordered w-full max-w-xs py-5"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="my-5">
            <div className="label">
              <span className="label-text">Last Name</span>
            </div>
            <input
              type="text"
              value={lastName}
              className="input input-bordered w-full max-w-xs py-5"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </>
      ) : null}
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
          type="password"
          value={password}
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
    </label>
  );
};

export default Input;
