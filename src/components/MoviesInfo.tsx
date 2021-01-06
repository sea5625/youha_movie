import React from 'react';
import { Search } from '../api/movies';
import MovieList from './MovieList';


type MoviesInfoProps = {
  search: Search[];
  response: string;
  errorMessage:string;
};

const MoviesInfo = ({ search, response, errorMessage }: MoviesInfoProps) => {
  if (search || response === "True") {
    const list = search.map((movie, index) => (
      <MovieList key={`${index}-${movie.Title}`} movie={movie} />
    ))
    return (<div className="movies">{list}</div>)
  }
  else {
    return (<div className="errorMessage">{errorMessage}</div>)
  }
}
export default MoviesInfo;
