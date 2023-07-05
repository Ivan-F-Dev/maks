import React from 'react';
import './App.css';
import Note from "./Components/Note";
import {mock} from "./mock";

function App() {
  return (
    <div className="App">
      {mock.length && mock.map(el => <Note task={el}/>)}
    </div>
  );
}

export default App;
