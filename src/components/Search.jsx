import React from 'react';
import { useState, useEffect } from 'react';

const Search = () => {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('Batman');
  useEffect(() => {
    //updateSearch
  }, [query]);

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    console.log(search);
  }

  return (
    <form onSubmit={getSearch} className="videos__search">
      <h2>¿Qué peliculas quieres ver hoy? </h2>
      <input className='videos__search__box' type="text" name="search" placeholder="Batman" value={search} onChange={updateSearch} />
      <button>Buscar</button>
    </form>
  )
}

export default Search;