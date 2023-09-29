import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store/configureStore';
import { UserDto } from 'data/dto/User.dto';
import { getUser } from 'api/service';

const initialState: UserDto = { email: '', id: '' };

export const fetchUserByToken = createAsyncThunk(
   'user/fetchUserByToken',
   async (token: string, { dispatch }) => {
      const { user } = await getUser(token);

      dispatch(setUser(user));
   },
);

export const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      setUser: (state, action: PayloadAction<UserDto>) => {
         state.email = action.payload.email;
         state.id = action.payload.id;
      },
      deleteUser: (state) => {
         state = initialState;
      },
   },
});

export const { setUser, deleteUser } = userSlice.actions;

export const selectEmail = (state: RootState) =>
   state.user.email.length > 0 ? state.user.email : 'unknown';

export default userSlice.reducer;
