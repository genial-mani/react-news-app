import React, { useState } from 'react';
import Navbar from './components/Navbar';
import NewsBoard from './components/NewsBoard';
import './App.css'

function App() {
  const [category, setCategory] = useState('general');
  const [country, setCountry] = useState('in');

  return (
    <div className='site-body'>
      <Navbar setCategory={setCategory} setCountry={setCountry} />
      <NewsBoard category={category} country={country} />
    </div>
  );
}

export default App;
