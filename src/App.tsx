import React from 'react';
import logo from './logo.svg';
import './App.scss';

interface Properties {
  name: string,
}

const App: React.FC<Properties> = ({
  name,
}) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello {name}
        </a>
      </header>
    </div>
  );
};

export default App;
