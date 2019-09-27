import React from 'react';

const ListItemDetailPage = location => {
  const movie = location.location.state;
  return (
    <div className='videos__item'>
    <h1> {movie.title} </h1>
    <img className='videos__item__img' src={movie.image} alt={movie.title} />
    <p>Año: {movie.year} </p>
    </div>
  );
}

export default ListItemDetailPage;