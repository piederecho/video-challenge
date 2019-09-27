import React from 'react';

const ListItemDetail = (props) => {
  const {Poster, Title} = props;
  return (
    <div className='videos__item'>
      <img className='videos__item__img' src={Poster} alt={Title} />
      <p> {Title} </p>
    </div>
  );
}

export default ListItemDetail;