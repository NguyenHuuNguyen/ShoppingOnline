import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../../pages/home';
import Profile from '../../pages/profile';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const Index: React.FC = () => {
    const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            {isLoggedIn ? (
                <Route path="/profile" element={<Profile />} />
            ) : null}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default Index;
