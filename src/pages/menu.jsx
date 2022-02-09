import React from 'react';
import  {MenuList}  from '../helpers/menuList';
import MenuItems  from '../components/menuItems';
import '../styles/menu.css'
function menu() {
  return(
  <div className='menu'>
      <div className="menuTitle">
        Our Menu
      </div>

      <div className="menuList">
     {MenuList.map((menu,key) => {
       return(
        <MenuItems 
        key={key}
         image={menu.image}
         name={menu.name} 
         price={menu.price} 
         />
       );
    })}
    <div className="topic">
      hello
    </div>
      </div>
      
  </div>
  )}

export default menu;
