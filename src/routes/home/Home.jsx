import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/footer/Footer';

const Home = () => {
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
