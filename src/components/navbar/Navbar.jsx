import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <div className="navbar bg-base-300 px-5">
      <div className="flex-1">
        <Link to={'/'} className="text-xl">
          <span className="text-gray-400">🧑🏻‍💻 DevTinder</span>
        </Link>
      </div>
      <div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
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
    </div>
  );
};

export default Navbar;
