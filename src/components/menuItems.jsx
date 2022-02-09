import React from 'react';

function menu({name,image,price}) {
  
  return(
   <div className='container' style={{ backgroundImage: `url(${image})` }}  >
     <h1>{name}</h1>
      <p>{price}</p>
   </div>
  )}

export default menu;
