import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store/configureStore';
import { PURGE } from 'redux-persist';

import { LeadDto } from './dto';
import { getLeads } from 'api/service';

const initialState: LeadDto[] = [];

export const fetchUserLeads = createAsyncThunk('leads/fetchUserLeads', async () => {
   const leads = await getLeads();

   return leads;
});

export const leadsSlice = createSlice({
   name: 'leads',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(fetchUserLeads.fulfilled, (state, action: PayloadAction<LeadDto[]>) => {
         state.push(...action.payload);
      });
      builder.addCase(fetchUserLeads.rejected, (state, action) => {
         throw new Error(action.error.message);
      });
      builder.addCase(PURGE, () => {
         return initialState;
      });
   },
});

export const selectLeads = (state: RootState) => state.leads;

export default leadsSlice.reducer;
