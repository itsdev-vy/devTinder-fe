import React, { useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import { Outlet, useNavigate } from 'react-router';
import Footer from '../../components/footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL } from '../../utils/constants';
import { addUser } from '../../redux/slice/user/userSlice';
import axios from 'axios';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user);

  const fetchUser = async () => {
    if (userData) return;
    try {
      const response = await axios.get(BASE_URL + '/profile/view', {
        withCredentials: true,
      });
      dispatch(addUser(response?.data));
    } catch (error) {
      if (error?.status === 401) {
        navigate('/login');
      }
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Home;
