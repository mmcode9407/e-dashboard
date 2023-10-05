import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store/configureStore';
import { UserDto } from 'data/user/dto';
import { getUser } from 'api/service';
import { PURGE } from 'redux-persist';

const initialState: UserDto = { email: null, id: null };

export const fetchUserByToken = createAsyncThunk('user/fetchUserByToken', async (token: string) => {
   const { user } = await getUser(token);

   return user;
});

export const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(fetchUserByToken.fulfilled, (state, action: PayloadAction<UserDto>) => {
         state.email = action.payload.email;
         state.id = action.payload.id;
      });
      builder.addCase(fetchUserByToken.rejected, (state, action) => {
         throw new Error(action.error.message);
      });
      builder.addCase(PURGE, () => {
         return initialState;
      });
   },
});

export const selectUserEmail = (state: RootState) =>
   state.user.email ? state.user.email : 'unknown';

export default userSlice.reducer;
