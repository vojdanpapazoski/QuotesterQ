import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

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
        console.error('Error during fetching!', err);
      });
  };

  return (
    <div className='container'>
      <div className='main'>
        <h1 className='q'>QuotesterQ</h1>
        <div className='quote'>{advice}</div>
        <br />
        <br />
        <br />
        <button className="button" onClick={fetchAdvice}>See More</button>
      </div>
    </div>
  );
}

export default App;
