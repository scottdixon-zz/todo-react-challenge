import React from 'react';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';

const ToDoList = (props) => (
  <div>
    <ListGroup>
      {props.tasks.map(item => {
        if (item.complete) {
          return <ListGroupItem key={item.id}>{ item.task } <Badge color="secondary">Completed</Badge></ListGroupItem>
        } else {
          return <ListGroupItem key={item.id}>{ item.task }</ListGroupItem>
        }
      })}
    </ListGroup>
  </div>
);

export default ToDoList;
