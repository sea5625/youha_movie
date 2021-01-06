import { createAsyncAction } from 'typesafe-actions';
import { MoviesInfo } from '../../api/movies';
import { AxiosError } from 'axios';


export const GET_MOVIES_INFO = 'movies/GET_MOVIES_INFO';
export const GET_MOVIES_INFO_SUCCESS = 'movies/GET_MOVIES_INFO_SUCCESS';
export const GET_MOVIES_INFO_FAILURE = 'movies/GET_MOVIES_INFO_FAILURE';

export const getMoviesInfoAsync = createAsyncAction(
  GET_MOVIES_INFO,
  GET_MOVIES_INFO_SUCCESS,
  GET_MOVIES_INFO_FAILURE
)<string, MoviesInfo, AxiosError>();
