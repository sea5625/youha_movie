import axios from 'axios';

export async function getMoviesInfo(movieName: string) {
  // Generic 을 통해 응답 데이터의 타입을 설정 할 수 있습니다.
  const response = await axios.get<MoviesInfo>(
    `https://www.omdbapi.com/?s=${movieName}&apikey=4a3b711b`
  );
  return response.data; // 데이터 값을 바로 반환하도록 처리합니다.
}

export interface MoviesInfo {
  Search: Search[];
  Response: string;
  totalResults?: string;
  Error?: string;
}

export interface Search {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}
