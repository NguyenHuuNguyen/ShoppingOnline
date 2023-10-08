import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setShowLogin, login } from '../../store/authSlice';
import { loginApi } from '../../common/api';

interface Props {}

const Index: React.FC<Props> = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const dispatch = useDispatch();

  const handleBackgroundClick = () => {
    dispatch(setShowLogin(false));
  };

  const loginHandler = async () => {
    try {
      const res = await loginApi(username, password);
      dispatch(login(res));
    } catch (err: any) {
      alert(err.response?.data.message);
    }
  };

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className="justify-center items-center flex fixed inset-0 bg-grey-fade" onClick={handleBackgroundClick}>
      <div className='w-[765px] h-[427px] flex-shrink-0 login-box-shadow rounded-[10px] bg-white px-[100px] pt-8 pb-20 grid grid-rows-4 grid-cols-5 gap-y-7 gap-x-2' onClick={stopPropagation}>
        <p className='col-start-1 col-end-6 text-[#08C03C] text-[36px] font-[800] flex justify-center items-center'>LOGIN SYSTEM</p>
        <p className='text-[#000] text-[20px] font-[500] flex justify-end items-center'>Username</p>
        <input
          className='col-start-2 col-end-6 border-2 border-gray-300 px-3 text-[20px] font-[500] rounded-md'
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <p className='text-[#000] text-[20px] font-[500] flex justify-end items-center'>Password</p>
        <input
          className='col-start-2 col-end-6 border-2 border-gray-300 px-3 text-[20px] font-[500] rounded-md'
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <div></div>
        <button className='col-start-2 col-end-6 bg-[#08C03C] rounded-[4px] text-[24px] font-[700] text-white' onClick={loginHandler}>LOGIN</button>
      </div>
    </div>
  );
};

export default Index;
