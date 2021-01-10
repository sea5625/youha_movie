import React, {useEffect}from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesInfoAsync } from '../modules/movies';

import { RootState } from '../modules';
import MoviesSearchForm from '../components/MoviesSearchForm';
import MoviesInfo from '../components/MoviesInfo';
import Header from '../components/Header';
import spinner from "../assets/ajax-loader.gif";


const MoviesConfainer = () => {

  // RootState 에서 state.movies를 반환 (store에 구독되어 있는 데이터를 추출)
  const { data, loading, error } = useSelector((state: RootState) => state.movies.movies);

  // Dispatch 생성
  const dispatch = useDispatch();

  // render 가장 초기에 "man"을 인자로하는 request
  useEffect(() => {
    dispatch(getMoviesInfoAsync.request("man"));
  },[])

  // typesafe-actions 라이브러리를 사용하여 생성한 AsyncAction 실행 : getMoviesInfoAsync
  const onSubmitMovieName = (movieName: string) => {
    dispatch(getMoviesInfoAsync.request(movieName));
  };      

  return (
    <div className="App">
      <div className="m-container">
        <Header text="HOOKED" />
        <MoviesSearchForm onSubmitMovieName={onSubmitMovieName} />
          <p className="App-intro">Sharing a few of our favourite movies</p>

          {/* error = movies.error, Network Error (AxiosError) */}
          {error && <div className="errorMessage">Network Error!</div>}
          {loading &&  <img className="spinner" src={spinner} alt="Loading spinner" />}

          {/* data.Error = movies.data.Error, API Response Error code, message */}
          {data && <MoviesInfo search={data.Search} response={data.Response} errorMessage={data.Error}/>}
      </div>
    </div>
  );
}

export default MoviesConfainer;
