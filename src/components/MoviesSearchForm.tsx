import React, { FormEvent, useState, ChangeEvent } from 'react';

type MoviesSearchFormProps = {
  onSubmitMovieName: (movieName: string) => void;
};

const MoviesSearchForm = ({ onSubmitMovieName }: MoviesSearchFormProps) => {
  const [input, setInput] = useState('');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitMovieName(input);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <form className="search" onSubmit={onSubmit}>
      <input onChange={onChange} value={input}/>
      <input type="submit" value="SEARCH" />
    </form>
  );
}

export default MoviesSearchForm;
