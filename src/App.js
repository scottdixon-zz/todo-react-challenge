import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import toDos from './data';
import List from './components/todo-list';
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Badge
} from "reactstrap";

const Heading = (props) => (
  <div className="heading">
    <h1>The Actual Title with {props.stuff} </h1>
    <h2>Things I need to get done!</h2>
  </div>
);



class App extends Component {
  render() {
    return <div>
        <Heading stuff="some stuff" />
        <List items={toDos}/>
      </div>;
  }
}

export default App;
