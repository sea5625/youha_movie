import axios from 'axios';

export async function getMoviesInfo(movieName: string) {
  const response = await axios.get<MoviesInfo>(
    `https://www.omdbapi.com/?s=${movieName}&apikey=4a3b711b`
  );
  return response.data; 
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
