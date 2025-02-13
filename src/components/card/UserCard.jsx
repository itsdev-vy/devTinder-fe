import React from 'react';

const UserCard = ({ user, displayCard }) => {
  const { firstName, lastName, photoUrl, age, gender, about } = user;
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={photoUrl} alt={firstName + ' image'} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + ' ' + lastName}</h2>
        {about ? <h6>{about}</h6> : null}
        {age && <h6>{age + ', ' + gender.toUpperCase()}</h6>}
        {!displayCard ? (
          <div className="card-actions justify-center my-4">
            <button className="btn btn-primary">Ignore</button>
            <button className="btn btn-secondary">Interested</button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default UserCard;
