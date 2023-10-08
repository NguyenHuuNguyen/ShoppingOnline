import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: !!localStorage.getItem('accessToken'),
    isShowLogin: false,
    userId: localStorage.getItem('userId'),
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.isShowLogin = false;
      localStorage.setItem('accessToken', action.payload.token);
      localStorage.setItem('userId', action.payload.id);
    },
    logout: (state) => {
      state.isLoggedIn = false;
      localStorage.setItem('accessToken', '');
      localStorage.setItem('userId', '');
    },
    setShowLogin: (state, action) => {
      state.isShowLogin = action.payload;
    },
  },
});

export const { login, logout, setShowLogin } = authSlice.actions;
export default authSlice.reducer;