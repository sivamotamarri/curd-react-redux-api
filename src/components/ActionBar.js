import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const ActionBar = props => {
  return (
    <div className="row card-body">
      <InputGroup className="col-sm-6">
        <FormControl placeholder="Search" />
        <InputGroup.Append>
          <Button variant="info">Search</Button>
        </InputGroup.Append>
      </InputGroup>

      <div className="col-sm-6">
        <Button variant="danger" style={{ float: "right" }} className="mr-2">
          Delete
        </Button>
        <Button
          variant="primary"
          style={{ float: "right" }}
          className="mr-2"
          onClick={() => props.updateNewModal(true)}
        >
          Create
        </Button>
      </div>
    </div>
  );
};

export default ActionBar;
