import axios from 'axios';
import React, { useEffect } from 'react';
import { addFeed } from '../../redux/slice/feed/feedSlice';
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL } from '../../utils/constants';
import UserCard from '../../components/card/UserCard';

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((state) => state.feed);

  const getFeed = async () => {
    if (feed) return;
    try {
      const response = await axios.get(
        BASE_URL + `/user/feed?page=${1}&limit=${10}`,
        {
          withCredentials: true,
        }
      );
      dispatch(addFeed(response?.data?.data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  return (
    feed && (
      <div className="flex justify-center my-10">
        <UserCard user={feed[0]} />
      </div>
    )
  );
};

export default Feed;
