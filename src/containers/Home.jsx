import React from 'react';
import { useState, useEffect } from 'react';
import '../assets/styles/App.scss';
import '../assets/styles/components/Home.scss';
import ListItem from '../components/ListItem';
import ListItemDetail from '../components/ListItemDetail';

const searchURL = 'Batman';
const url = `http://www.omdbapi.com/?i=tt3896198&apikey=dc5fe752&s=${searchURL}&plot=full&type=movie`;

const App = () => {
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState('');
  const [link, setLink] = useState('');
  const [query, setQuery] = useState('Batman');
  useEffect(() => {
    getMovies(url);
  }, []);

  const getMovies = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setVideos(data.Search));
  }
  const updateSearch = e => {
    setSearch(e.target.value);
  }
  const updateLink = () => {
    let filter = document.getElementById("filter").value;
    setLink(filter);
    console.log(filter);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    getMovies(`http://www.omdbapi.com/?i=tt3896198&apikey=dc5fe752&s=${search}&plot=full&type=${link}`)
  }
  return (
    <>
    <form onSubmit={getSearch} className="videos__search">
      <h2>¿Qué peliculas quieres ver hoy? </h2>
      <input className='videos__search__box' type="text" name="search" placeholder="Batman" value={search} onChange={updateSearch} />
      <select id="filter" name="filter" onChange={updateLink}>
        <option value="movie">Peliculas</option>
        <option value="series">Series</option>
      </select>
      <button>Buscar</button>
    </form>
      <ListItem>
        {videos.map((item) => <ListItemDetail key={item.imdbID} {...item} />,)}
      </ListItem>
    </>
  )};

export default App;
