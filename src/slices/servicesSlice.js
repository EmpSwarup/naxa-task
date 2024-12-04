import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  services: [], // Array to hold the list of services
  loading: false, // Check loading
  error: null, // For errors
};

const servicesSlice = createSlice({
  name: 'services', // name of slice
  initialState, // The initial state of the slice
  reducers: {
    // Action to indicate the start of fetching services
    fetchServicesStart: (state) => {
      state.loading = true; // Set loading state to true
    },
    // to handle successful fetching of services
    fetchServicesSuccess: (state, action) => {
      state.services = action.payload; // Set services data from the action payload
      state.loading = false; // Set loading state to false
    },
    // to handle failure in fetching services
    fetchServicesFailure: (state, action) => {
      state.error = action.payload; // Set error message from action payload
      state.loading = false; // Set loading state to false
    },
  },
});

// Export actions so they can be dispatched in the app
export const { fetchServicesStart, fetchServicesSuccess, fetchServicesFailure } = servicesSlice.actions;

// Export the reducer to be included in the store
export default servicesSlice.reducer;
