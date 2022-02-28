import React, { useState } from 'react';
import './App.scss';

const namesToRender: Array<string> = [
  'Limock',
  'Stefan',
  'Marvin',
];

new Map<string, React.ReactNode>()

const App: React.FC = () => {
  const [list, setList] = useState<Array<string>>(namesToRender);
  const showButton = true;

  const renderNames = () => {
    return list.map((name) => (
      <div key={name}>
        {name}
      </div>
    ));
  };

  const shouldRenderButton = () => showButton && list.length > 0;

  return (
    <div className="App">
      {true && renderNames()}
      {shouldRenderButton() && <button onClick={() => setList([])}>clearList</button>}
    </div>
  );
};

export default App;
