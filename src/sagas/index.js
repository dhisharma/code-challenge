import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchNews() {
  debugger
  const json = yield fetch('http://localhost:8080/products')
    .then(response => response.json());

  yield put({ type: "NEWS_RECEIVED", json: json });
}

function* actionWatcher() {
  yield takeLatest('GET_NEWS', fetchNews)
}


export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
