import { createSlice } from '@reduxjs/toolkit';

interface IUserObject {
  index: number;
  officeIndex: number;
  officeName: string;
  password: string; // TODO 지워야함
  type: 'M' | 'A' | 'B' | 'C' | 'D' | 'E';
  department: string;
  name: string;
  email: string;
  phone: string;
}
export interface IUserState {
  userInfo: IUserObject | null;
}

const initialState: IUserState = {
  userInfo: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, { payload }) => {
      state.userInfo = payload;
    },
    clearUserInfo: (state) => {
      state.userInfo = null;
    },
  },
});

export const { setUserInfo, clearUserInfo } = userSlice.actions;

export default userSlice.reducer;
