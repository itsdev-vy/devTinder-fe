import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router';
import { BASE_URL } from '../../utils/constants';
import { removeUser } from '../../redux/slice/user/userSlice';
import { emptyFeed } from '../../redux/slice/feed/feedSlice';
import { removeConnections } from '../../redux/slice/connections/connectionSlice';

const Navbar = () => {
  const User = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(
        BASE_URL + '/logout',
        {},
        {
          withCredentials: true,
        }
      );
      dispatch(removeUser());
      dispatch(emptyFeed());
      dispatch(removeConnections());
      navigate('/login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="navbar bg-base-300 px-5">
      <div className="flex-1">
        <Link to={'/'} className="text-xl">
          <span className="text-gray-400">🧑🏻‍💻 DevTinder</span>
        </Link>
      </div>
      {User && (
        <div className="flex items-center gap-2">
          <div className="form-control">Welcome, {User?.firstName}</div>
          <div className="dropdown dropdown-end flex">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="user photo" src={User?.photoUrl} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to={'/profile'} className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link to={'/connections'}>Connections</Link>
              </li>
              <li>
                <Link to="/requests">Requests</Link>
              </li>
              <li>
                <Link to="/premium">Premium</Link>
              </li>
              <li>
                <div className="btn btn-ghost" onClick={handleLogout}>
                  Logout
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
