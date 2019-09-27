import React from 'react';
import { useState, useEffect } from 'react';

const Search = () => {

const [filter, setFilter] = useState('movies');
useEffect(() => {
}, []);

const getURL = e => {
  e.preventDefault();
  setQuery(search);
  getMovies(`http://www.omdbapi.com/?i=tt3896198&apikey=dc5fe752&s=${search}&plot=full`)
}

const getFilter = e =>{
  setFilter(e.target.value);
}

const getMovies = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => setVideos(data.Search));
}

  return (
    <ul>
      <li onClick={getFilter}>Peliculas</li>
      <li>Series</li>
    </ul>
  )
}

export default Search;