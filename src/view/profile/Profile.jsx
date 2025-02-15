import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../redux/slice/user/userSlice';
import { BASE_URL } from '../../utils/constants';
import ProfileInput from '../../components/input/profileInput';
import UserCard from '../../components/card/UserCard';

const Profile = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [age, setAge] = useState(user?.age || '');
  const [gender, setGender] = useState(user?.gender || '');
  const [about, setAbout] = useState(user?.about);
  const [photoUrl, setPhotoUrl] = useState(user?.photoUrl);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.patch(
        BASE_URL + '/profile/edit',
        {
          firstName,
          lastName,
          age,
          gender,
          about,
          photoUrl,
        },
        {
          withCredentials: true,
        }
      );
      console.log(response?.data);
      dispatch(addUser(response?.data));
      if (response?.status === 200) {
        setSuccess('Success');
      }
    } catch (error) {
      setError(error?.response?.data?.error);
      console.error(error);
    }
  };

  return (
    <div className="flex-grow flex justify-center my-10 gap-7">
      <UserCard
        user={{ firstName, lastName, age, gender, about, photoUrl }}
        displayCard="displayCard"
      />
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">Edit Profile</h2>
          <div className="py-5">
            <ProfileInput
              firstName={firstName}
              setFirstName={setFirstName}
              lastName={lastName}
              setLastName={setLastName}
              age={age}
              setAge={setAge}
              gender={gender}
              setGender={setGender}
              about={about}
              setAbout={setAbout}
              photoUrl={photoUrl}
              setPhotoUrl={setPhotoUrl}
            />
          </div>
          <div className="card-actions justify-center">
            <span>{error}</span>
            <button className="btn btn-primary" onClick={handleSubmit}>
              Update Profile
            </button>
          </div>
          <span className="text-green-500 text-center">{success}</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
