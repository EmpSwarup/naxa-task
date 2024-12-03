import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import servicesReducer from '../services/servicesSlice';
import servicesSaga from '../services/servicesSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    services: servicesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(servicesSaga);

export default store;
