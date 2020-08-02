import React, { useState } from 'react';
import logo from './logo.svg';
import LikeButton from './components/LikeButton'
import MouseTracker from './components/MouseTracker'
import useMousePosition from './hooks/useMousePosition'
import useURLLoader from './hooks/useURLLoader'
import './App.css';

interface IShowResult {
  message: string;
  status: string;
}

function App() {
  const [show, setShow] = useState(true)
  const [data, dataLoading] = useURLLoader('https://dog.ceo/api/breeds/image/random',[show])
  const dogResult = data as IShowResult
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <button onClick={() => { setShow(!show) }}>Refresh dog photo</button>
        </p>
        {dataLoading ? <p>🐕读取中</p> : <img src={dogResult && dogResult.message} />}
        {show && <LikeButton />}
        <MouseTracker />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
