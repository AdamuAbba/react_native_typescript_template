import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IInitialState} from 'features/auth/types';

const initialState: IInitialState = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsLoggedIn: (
      state,
      {payload}: PayloadAction<IInitialState['isLoggedIn']>,
    ) => {
      state.isLoggedIn = payload;
    },
  },
});

export const {setIsLoggedIn} = authSlice.actions;
export default authSlice;
