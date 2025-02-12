import React from 'react';

const UserCard = ({ user }) => {
  const { firstName, lastName, photoUrl, skills, about } = user;
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={photoUrl} alt={firstName + ' image'} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + ' ' + lastName}</h2>
        {about ? <p>{about}</p> : null}
        {skills && <p>{skills}</p>}
        <div className="card-actions justify-center my-4">
          <button className="btn btn-primary">Ignore</button>
          <button className="btn btn-secondary">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
