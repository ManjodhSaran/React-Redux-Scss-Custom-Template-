import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    production: false,
    maintenance: false,
  },
  reducers: {
    setMaintenance: (state, action) => {
      state.maintenance = action.payload;
    },
  },
});

export const { setMaintenance } = appSlice.actions;

export const selectProduction = state => state.app.production;
export const selectMaintenance = state => state.app.maintenance;

export default appSlice.reducer;