import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getFromTheLS, removeFromLS } from '../../helpers/localStorage';
import { handleAccessToken } from '../../helpers/accessToken';
import { User } from '../apiSlices/user';
import { UserRoles } from '../../const';

export interface UserState {
  _id: string | null;
  email: string | null;
  username: string | null;
  roles: UserRoles[] | null;
  accessToken: string | null;
}

const initialState: UserState = {
  _id: null,
  email: null,
  username: null,
  roles: null,
  accessToken: null,
};

const loadState = () =>
  handleAccessToken({ accessToken: getFromTheLS('accessToken') }) ||
  initialState;

export const userSlice = createSlice({
  name: 'user',
  initialState: loadState(),
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      return action.payload;
    },
    logout: () => {
      removeFromLS('accessToken');
      return initialState;
    },
  },
});

export const { logout, setUser } = userSlice.actions;

export default userSlice.reducer;
