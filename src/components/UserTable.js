import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

const UserTable = props => {
  const users = useSelector(state => state.users);
  console.log("hi");
  console.log(users);
  console.log(props);
  return (
    <div className="card-body">
      <Table striped hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th></th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.users.length > 0 ? (
            props.users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <Form.Check aria-label="option 1" />
                </td>
                <td>
                  <button
                    onClick={() => {
                      props.editRow(user);
                      props.updateEditModal(true);
                    }}
                    className="button muted-button"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => props.deleteUser(user.id)}
                    className="button muted-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No users</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default UserTable;
