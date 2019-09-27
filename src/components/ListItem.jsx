import React from 'react';

const ListItem = ({children}) => {
  return (
    <>
      <div className='videos'>
        {children}
      </div>
    </>
  )};

export default ListItem;