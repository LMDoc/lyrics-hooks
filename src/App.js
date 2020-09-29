import React, { useEffect } from 'react';
import { API } from './api/index'
import './App.css';

function App() {

  useEffect(() => {
    const list = API.getLyrics()
    console.log(list)
  })

  return (
    <div className="App">

    </div>
  );
}

export default App;
