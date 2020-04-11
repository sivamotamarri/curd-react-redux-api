import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { handleChange, deleteSelectedUsers } from "./actions/userActions";
import { useDispatch, useSelector } from "react-redux";

const ActionBar = (props) => {
  const searchText = useSelector((state) => state.searchText);
  const dispatch = useDispatch();
  return (
    <div className="row card-body">
      <InputGroup className="col-sm-6">
        <FormControl
          id="search-text"
          placeholder="Search"
          type="text"
          value={searchText}
          onChange={(e) => dispatch(handleChange(e.target.value))}
        />
        <InputGroup.Append>
          <Button variant="info" onClick={() => props.searchUsers(searchText)}>
            Search
          </Button>
        </InputGroup.Append>
      </InputGroup>

      <div className="col-sm-6">
        <Button
          variant="danger"
          style={{ float: "right" }}
          className="mr-2"
          onClick={() => dispatch(deleteSelectedUsers())}
        >
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
