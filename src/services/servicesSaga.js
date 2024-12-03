import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchServicesStart, fetchServicesSuccess, fetchServicesFailure } from './servicesSlice';

function* fetchServicesSaga() {
  try {
    const response = yield call(fetch, 'https://admin.naxa.com.np/api/services');
    const data = yield response.json();
    yield put(fetchServicesSuccess(data));
  } catch (error) {
    yield put(fetchServicesFailure(error.message));
  }
}

// Watch for fetchServicesStart action to trigger the API call
function* servicesSaga() {
  yield takeEvery(fetchServicesStart.type, fetchServicesSaga);
}

export default servicesSaga;
