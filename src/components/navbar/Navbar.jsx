import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router';

const Navbar = () => {
  const User = useSelector((state) => state.user);
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
                <Link to={'/settings'}>Settings</Link>
              </li>
              <li>
                <Link to={'/logout'}>Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
