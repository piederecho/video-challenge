import React from 'react';

const ListItemDetailPage = props => {
  const { imdbID, Poster, Title } = props;
  console.log(props)
  return (
    <div className='videos__item'>
      <img className='videos__item__img' src={Poster} alt={Title} />
      <p> {imdbID} </p>
    </div>
  );
}

export default ListItemDetailPage;