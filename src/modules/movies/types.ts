import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { MoviesInfo } from '../../api/movies';

export type MoviesAction = ActionType<typeof actions>;

export type MoviesState = {
  movies: {
    loading: boolean;
    error: Error | null;
    data: MoviesInfo | null;
  };
};

