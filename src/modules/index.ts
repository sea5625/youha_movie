import { combineReducers } from 'redux';
import movies from './movies/reducer';
import { moviesSaga } from './movies';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  movies
});

export default rootReducer;

// RootReducer의 반환값를 유추
// 추후 이 타입을 컨테이너 컴포넌트에서 불러와서 사용해야 하므로 내보내줍니다.
export type RootState = ReturnType<typeof rootReducer>;

// rootSaga 생성
export function* rootSaga() {
  yield all([moviesSaga()]);
}
