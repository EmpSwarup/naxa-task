import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import servicesReducer from '../slices/servicesSlice';
import servicesSaga from '../sagas/servicesSaga';

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
