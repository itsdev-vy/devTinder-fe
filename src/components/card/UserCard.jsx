import React from 'react';
import { BASE_URL } from '../../utils/constants';
import { useDispatch } from 'react-redux';
import { removeFeed } from '../../redux/slice/feed/feedSlice';
import axios from 'axios';

const UserCard = ({ user, displayCard }) => {
  const dispatch = useDispatch();

  if (!user) {
    return <div>No user data available</div>;
  }

  const { _id, firstName, lastName, photoUrl, age, gender, about } = user;

  const handleSendRequest = async (status, userId) => {
    try {
      await axios.post(
        BASE_URL + `/request/send/${status}/${userId}`,
        {},
        {
          withCredentials: true,
        }
      );
      dispatch(removeFeed(userId));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={photoUrl} alt={firstName + ' image'} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + ' ' + lastName}</h2>
        {about ? <h6>{about}</h6> : null}
        {age && <h6>{age + ', ' + gender?.toUpperCase()}</h6>}
        {!displayCard ? (
          <div className="card-actions justify-center my-4">
            <button
              className="btn btn-primary"
              onClick={() => handleSendRequest('ignored', _id)}
            >
              Ignore
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => handleSendRequest('interested', _id)}
            >
              Interested
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default UserCard;
