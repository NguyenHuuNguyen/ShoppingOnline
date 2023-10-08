import React from 'react';
import Navbar from './components/navbar';
import Content from './components/content';
import Login from './pages/login';
import { RootState } from './store';
import { useSelector } from 'react-redux';

function App() {
  const isShowLogin = useSelector((state: RootState) => state.auth.isShowLogin);
  return (
    <div className='flex'>
      <Navbar></Navbar>
      <Content></Content>
      {isShowLogin ? <Login></Login> : null}
    </div>
  );
}

export default App;
