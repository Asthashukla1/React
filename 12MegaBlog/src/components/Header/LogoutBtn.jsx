import React from 'react';
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';

function LogoutBtn() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  return (
    <button
      onClick={logoutHandler}
      className="
        px-5 py-2
        bg-pink-500  text-white font-semibold
        rounded-full
        hover:bg-pink-600
        transition
        duration-300
        shadow-md
        focus:outline-none
        focus:ring-2 focus:ring-red-400
      "
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
