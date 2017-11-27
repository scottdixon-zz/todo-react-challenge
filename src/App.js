import React, { Component } from 'react';
import './App.css';

import toDos from './data';
import ToDoList from './components/todo-list'

const Heading = (props) => (
  <div className="heading">
    <h1>{props.title}</h1>
    <h2>{props.subtitle}</h2>
  </div>
);

class App extends Component {
  render() {
    return (
      <div>
        <Heading title="ToDo List" subtitle="Things I need to do"/>
        <ToDoList tasks={toDos}/>
      </div>
    );
  }
};

export default App;
