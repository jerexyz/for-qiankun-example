import React from 'react';
import './App.css';

import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'app1', // app name registered
    entry: '//localhost:8000',
    container: '#app1',
    activeRule: '/app1',
  },
]);

function App() {
  return (
    <div className="App">
     <div>create-react-app</div>
     <div id="app1"></div>
    </div>
  );
}

start();

export default App;
