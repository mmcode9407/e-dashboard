import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store/configureStore';
import { PURGE } from 'redux-persist';

import { LeadDto } from './dto';
import { getLeads } from 'api/service';

interface ILeadsSlice {
   isLoading: boolean;
   leads: LeadDto[];
}

const initialState: ILeadsSlice = { isLoading: false, leads: [] };

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
         state.leads.push(...action.payload);
         state.isLoading = false;
      });
      builder.addCase(fetchUserLeads.pending, (state) => {
         state.isLoading = true;
      });
      builder.addCase(fetchUserLeads.rejected, (state, action) => {
         throw new Error(action.error.message);
      });
      builder.addCase(PURGE, () => {
         return initialState;
      });
   },
});

export const selectLeads = (state: RootState) => state.leads.leads;
export const selectState = (state: RootState) => state.leads.isLoading;

export default leadsSlice.reducer;
