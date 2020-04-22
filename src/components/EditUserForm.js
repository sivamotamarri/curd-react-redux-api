import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editUser } from "./actions/userActions";

const EditUserForm = (props) => {
  const dispatch = useDispatch();

  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  const handleCancelEvent = (event) => {
    props.setEditing(false);
    props.updateEditModal(false);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Edit user</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          onSubmit={(event) => {
            event.preventDefault();
            props.setEditing(false);
            //props.updateUser(user.id, user);
            dispatch(editUser(user));
            props.updateEditModal(false);
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
          <Form.Group controlId="Salary">
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
          <Form.Group controlId="Age">
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
              Update
            </Button>
            <Button onClick={handleCancelEvent}>Cancel</Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditUserForm;
