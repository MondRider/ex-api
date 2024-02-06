import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {
  const [catFact, setCatFact] = useState('');

  const fetchCatFact = () => {
    axios.get('https://catfact.ninja/fact').then((res) => {
      setCatFact(res.data.fact);
    });
  }
  useEffect(() => {
    fetchCatFact();
  }, []);

  return (
    <div className='flexbox'>
      <button onClick={fetchCatFact}>Generate Cat Fact</button>
      <p>{catFact}</p>
    </div>
  );
}


export default App;
