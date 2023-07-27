import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [minhaVariavel, setMinhaVariavel] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3010') // Chamada à API do backend
      .then(response => setMinhaVariavel(response.data.minhaVariavel))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <p>{minhaVariavel}</p>
    </>
  );
}

export default App;
