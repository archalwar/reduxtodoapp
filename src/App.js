import React from 'react';

import './App.css';

import CreateTodo from './containers/CreateTodo';
import Table from './containers/Table';



function App() {
  return (
    <div className="App">
      <h1>Todo App with React</h1>

   <CreateTodo />
    <Table />

  
      
    </div>
  );
}

export default App;
