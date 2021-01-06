import { createReducer } from 'typesafe-actions';
import { MoviesState, MoviesAction } from './types';
import { GET_MOVIES_INFO, GET_MOVIES_INFO_SUCCESS, GET_MOVIES_INFO_FAILURE } from './actions';

const initialState: MoviesState = {
  movies: {
    loading: false,
    error: null,
    data: null
  }
};

const movies = createReducer<MoviesState, MoviesAction>(initialState, {
  [GET_MOVIES_INFO]: state => ({
    ...state,
    movies: {
      loading: true,
      error: null,
      data: null
    }
  }),
  [GET_MOVIES_INFO_SUCCESS]: (state, action) => ({
    ...state,
    movies: {
      loading: false,
      error: null,
      data: action.payload
    }
  }),
  [GET_MOVIES_INFO_FAILURE]: (state, action) => ({
    ...state,
    movies: {
      loading: false,
      error: action.payload,
      data: null
    }
  })
});

export default movies;