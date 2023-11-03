import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Menu } from "./Menu.js";
import items from './data.js';
import { Categories } from './Categories';

function App() {
  const [menuItems ,setMenuItems]= useState(items);
  const [categories , setCategories] = useState([]);
  const filterItems =(category)=>{
    if(category === "all"){
      setMenuItems(items);
      return ;
    }
    const newItems = items.filter((item)=>item.category === category)
    setMenuItems(newItems);
  }
  return (
    <main>
      <section className='menu Section'>
        <div className='title'>
          <h2 > Our Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories filterItems={filterItems} />
        <Menu items = {menuItems}/>
      </section>
    </main>
  );
}

export default App;
