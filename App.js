import React from 'react';
import NavBar from './components/navbar'
import Allcomponents from './components/allcomponents';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <NavBar/>
    <main className="container">
      <Allcomponents/>
    </main>

    </React.Fragment>
    
  );
}

export default App;
