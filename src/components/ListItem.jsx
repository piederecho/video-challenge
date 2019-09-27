import React from 'react';

const ListItem = ({children}) => {
  return (
    <>
      <h1>Crehana Videos</h1>
      <div className='videos'>
        {children}
      </div>
    </>
  )};

export default ListItem;