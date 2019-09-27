import React from 'react';
import { Link } from 'react-router-dom';

const ListItemDetail = (props) => {
  const { imdbID, Poster, Title } = props;
  return (
    <Link to={{
      pathname: `/movie/${imdbID}`,
      state:
        {
          title: props.Title,
          image: props.Poster,
          year: props.Year
        }
      }}>
      <div className='videos__item'>
        <img className='videos__item__img' src={Poster} alt={Title} />
        <p> {Title} </p>
      </div>
    </Link>
  );
};

export default ListItemDetail;
