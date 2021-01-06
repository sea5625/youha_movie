import React, {useEffect}from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesInfoAsync } from '../modules/movies';

import { RootState } from '../modules';
import MoviesSearchForm from '../components/MoviesSearchForm';
import MoviesInfo from '../components/MoviesInfo';
import Header from '../components/Header';
import spinner from "../assets/ajax-loader.gif";


const MoviesConfainer = () => {
  const { data, loading } = useSelector((state: RootState) => state.movies.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesInfoAsync.request("man"));
  },[])

  const onSubmitMovieName = (movieName: string) => {
    dispatch(getMoviesInfoAsync.request(movieName));
  };      

  return (
    <div className="App">
      <div className="m-container">
        <Header text="HOOKED" />
        <MoviesSearchForm onSubmitMovieName={onSubmitMovieName} />
          <p className="App-intro">Sharing a few of our favourite movies</p>
          {loading &&  <img className="spinner" src={spinner} alt="Loading spinner" />}
          {data && <MoviesInfo search={data.Search} response={data.Response} errorMessage={data.Error}/>}
      </div>
    </div>
  );
}

export default MoviesConfainer;
