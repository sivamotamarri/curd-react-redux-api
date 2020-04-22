import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Col } from "react-bootstrap";
import { addUser } from "./actions/userActions";

const AddUserForm = (props) => {
  console.log(props);
  const usersData = useSelector((state) => state.users);
  const initialFormState = useSelector((state) => state.initialFormState);
  const [user, setUser] = useState(initialFormState);
  const [users, setUsers] = useState(usersData);

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add user</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          onSubmit={(event) => {
            event.preventDefault();
            if (
              !user.employee_name ||
              !user.employee_salary ||
              !user.employee_age
            )
              return;
            dispatch(addUser(user));
            //props.addUser(user);

            setUsers({ ...users, user });
            props.updateNewModal(false);
            setUser(initialFormState);
          }}
        >
          <Form.Group controlId="name">
            <Form.Row>
              <Col>
                <Form.Label>Name</Form.Label>
              </Col>
              <Col>
                <input
                  type="text"
                  name="employee_name"
                  value={user.employee_name}
                  onChange={handleInputChange}
                />
              </Col>
            </Form.Row>
          </Form.Group>

          <Form.Group controlId="salary">
            <Form.Row>
              <Col>
                <Form.Label>Salary</Form.Label>
              </Col>
              <Col>
                <input
                  type="text"
                  name="employee_salary"
                  value={user.employee_salary}
                  onChange={handleInputChange}
                />
              </Col>
            </Form.Row>
          </Form.Group>
          <Form.Group controlId="age">
            <Form.Row>
              <Col>
                <Form.Label>Age</Form.Label>
              </Col>
              <Col>
                <input
                  type="text"
                  name="employee_age"
                  value={user.employee_age}
                  onChange={handleInputChange}
                />
              </Col>
            </Form.Row>
          </Form.Group>
          <Modal.Footer>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddUserForm;
