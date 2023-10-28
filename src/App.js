import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [advice, setAdvice] = useState('');

  useEffect(() => {
    console.log('Welcome!');
    fetchAdvice();
  }, []);

  const fetchAdvice = () => {
    axios
      .get('https://api.adviceslip.com/advice')
      .then((res) => {
        const { advice } = res.data.slip; 
        setAdvice(advice);
        console.log(advice);
      })
      .catch((err) => {
        console.log('Error during fetching!', err);
      });
  };

  return <div className='container'>
    <div className='main'>
    <div className='quote'>{advice}</div>
</div>
</div>
}

export default App;
