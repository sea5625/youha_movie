import { getMoviesInfoAsync, GET_MOVIES_INFO } from './actions';
import { getMoviesInfo, MoviesInfo } from '../../api/movies';
import { call, put, takeEvery } from 'redux-saga/effects';

function* getMoviesInfoSaga(action: ReturnType<typeof getMoviesInfoAsync.request>) {
  try {
    const movies: MoviesInfo = yield call(getMoviesInfo, action.payload);
    yield put(getMoviesInfoAsync.success(movies));
  } catch (e) {
    yield put(getMoviesInfoAsync.failure(e));
  }
}

export function* githubSaga() {
  yield takeEvery(GET_MOVIES_INFO, getMoviesInfoSaga);
}
