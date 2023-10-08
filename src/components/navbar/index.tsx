import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RootState } from '../../store';
import { setShowLogin, logout } from '../../store/authSlice';
import { resetCart } from '../../store/productSlice';

const Index: React.FC = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleLoginClick = () => {
    dispatch(setShowLogin(true));
  };

  const handleLogoutClick = () => {
    dispatch(logout());
    dispatch(resetCart());
  };

  return (
    <div className='w-[300px] h-[1080px] flex-shrink-0 box-shadow px-3 py-5'>
      <div className='flex flex-col'>
        <div className='flex gap-3'>
          <img src='/asset/images/ShoppingIcon.png' className='w-[40px] h-[40px]' alt='shopping icon' />
          <p className='text-[28px] font-[400]'>Shopping Online</p>
        </div>
        <div className='mt-7 flex flex-col gap-4'>
          <div className='flex gap-2 items-center'>
            <NavLink to="/" className='text-[28px] font-[400] flex gap-2 items-center'>
              <img src='/asset/images/Home.png' alt='Home' className='w-[24px] h-[24px]' />
              Home
            </NavLink>
          </div>
          {isLoggedIn ? (
            <>
              <div className='flex gap-2 items-center'>
                <NavLink to="/profile" className='text-[28px] font-[400] flex gap-2 items-center'>
                  <img src='/asset/images/User_alt.png' alt='Profile' className='w-[24px] h-[24px]' />
                  Profile
                </NavLink>
              </div>
              <button
                className='bg-[#08C03C] rounded-[8px] flex-shrink-0 w-[260px] h-[44px] text-[28px] font-[700] text-white'
                onClick={handleLogoutClick}
              >
                LOGOUT
              </button>
            </>
          ) : (
            <button
              className='bg-[#08C03C] rounded-[8px] flex-shrink-0 w-[260px] h-[44px] text-[28px] font-[700] text-white'
              onClick={handleLoginClick}
            >
              LOGIN
            </button>
          )}

          <div className='mt-[530px] flex justify-center'>
            <img src='/asset/images/CustomerService.svg' alt='customer service img'></img>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Index;
