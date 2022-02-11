import React,{useEffect} from 'react';
import  {MenuList}  from '../helpers/menuList';
import MenuItems  from '../components/menuItems';
import alanBtn from '@alan-ai/alan-sdk-web';
import '../styles/menu.css'
function menu() {

  useEffect(() => {
    alanBtn({
        key: '0eaf02f4d42c16ce7049b3119141579a2e956eca572e1d8b807a3e2338fdd0dc/stage',
        onCommand: (commandData) => {
          if (commandData.command === 'go:back') {
            console.log('hello');
          }
        }
    });
  }, []);


  
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
