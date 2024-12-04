import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import servicesReducer from '../slices/servicesSlice';
import servicesSaga from '../sagas/servicesSaga';

// Creating the saga middleware instance
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  // Setting up the reducer for the 'services' slice of the store
  reducer: {
    services: servicesReducer,
  },
  // Adding saga middleware to the default middleware stack
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

// Running the servicesSaga to handle side effects for services
sagaMiddleware.run(servicesSaga);

export default store;
