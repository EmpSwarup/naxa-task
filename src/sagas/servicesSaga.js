import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchServicesStart, fetchServicesSuccess, fetchServicesFailure } from '../slices/servicesSlice'; // Import the actions from the servicesSlice

// The saga function to fetch services from the API
function* fetchServicesSaga() {
  try {
    // Making an API call using the 'call' effect
    const response = yield call(fetch, 'https://admin.naxa.com.np/api/services');
    const data = yield response.json(); // Parsing the JSON response
    yield put(fetchServicesSuccess(data)); // Dispatch the success action with the fetched data
  } catch (error) {
    yield put(fetchServicesFailure(error.message)); // If error, dispatch the failure action with the error message
  }
}

// Watch for fetchServicesStart action to trigger the API call
function* servicesSaga() {
  yield takeEvery(fetchServicesStart.type, fetchServicesSaga); // Watches for the fetchServicesStart action and calls fetchServicesSaga
}

export default servicesSaga;
