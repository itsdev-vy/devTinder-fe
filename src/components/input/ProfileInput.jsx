import React from 'react';

const ProfileInput = ({
  firstName,
  lastName,
  age,
  gender,
  about,
  photoUrl,
  setFirstName,
  setLastName,
  setAge,
  setGender,
  setAbout,
  setPhotoUrl,
}) => {
  return (
    <label className="form-control w-full max-w-xs">
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
      <div className="my-3">
        <div className="label">
          <span className="label-text">Last Name</span>
        </div>
        <input
          type="text"
          value={lastName}
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="my-3">
        <div className="label">
          <span className="label-text">Age</span>
        </div>
        <input
          type="text"
          value={age}
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div className="my-3">
        <div className="label">
          <span className="label-text">Gender</span>
        </div>
        <input
          type="text"
          value={gender}
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => setGender(e.target.value)}
        />
      </div>
      <div className="my-3">
        <div className="label">
          <span className="label-text">About</span>
        </div>
        <input
          type="text"
          value={about}
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => setAbout(e.target.value)}
        />
      </div>
      <div className="my-3">
        <div className="label">
          <span className="label-text">Upload Photo</span>
        </div>
        <input
          type="text"
          value={photoUrl}
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => setPhotoUrl(e.target.value)}
        />
      </div>
    </label>
  );
};

export default ProfileInput;
