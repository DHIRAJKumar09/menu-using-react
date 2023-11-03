import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Menu } from "./Menu.js";
import items from './data.js';
import { Categories } from './Categories';

function App() {
  const [menuItems ,setMenuItems]= useState(items);
  const [categories , setCategories] = useState([]);
  return (
    <main>
      <section className='menu Section'>
        <div className='title'>
          <h2 > Our Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories/>
        <Menu items = {menuItems}/>
      </section>
    </main>
  );
}

export default App;
