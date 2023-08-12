// src/main/frontend/src/App.js

import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [hello, setHello] = useState('')

  useEffect(() => {
    axios.get('/api/hello')
        .then(response => setHello(response.data))
        .catch(error => console.log(error))
  }, []);

  return (
    <div>
      <div class="header">
        <h1>안녕하세요. 여러분들 블로그에 오신 걸 방가워요.</h1>
      </div>
      <div>컨트롤러에서 가져온 데이터 : {hello}</div>
    </div>
  );
}

export default App;