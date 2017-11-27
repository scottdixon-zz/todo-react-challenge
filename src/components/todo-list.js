import React from "react";
import {
  ListGroup,
  ListGroupItem,
  Badge
} from "reactstrap";

export default ({items}) => (
  <ListGroup>
    {items.map((listItem) => {
      if (listItem.complete === true) {
        return <ListGroupItem key={listItem.id}>{listItem.task} <Badge color="success" pill>Complete</Badge></ListGroupItem>;
      } else {
        return <ListGroupItem key={listItem.id}>{listItem.task} <Badge color="danger" pill>Incomplete</Badge></ListGroupItem>;
      }
    })};
  </ListGroup>
);
