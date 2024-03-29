import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get('api/data')
      .then(res => setData(res.data))
      .catch(res => console.log(err))
  }, [])
  return (

    <>
      <div>
        <p>"hellow,world",{data}</p>
      </div>
    </>
  );
}

export default App;
