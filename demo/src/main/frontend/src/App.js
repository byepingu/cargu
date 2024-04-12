import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.scss';
import Home from './component/Home';


function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get('api/data')
      .then(res => setData(res.data))
  }, [])
  return (

    <>
      <>
      <Home/>
      </>
    </>
  );
}

export default App;
