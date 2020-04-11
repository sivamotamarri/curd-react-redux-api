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
                  name="name"
                  value={user.name}
                  onChange={handleInputChange}
                />
              </Col>
            </Form.Row>
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Row>
              <Col>
                <Form.Label>Email</Form.Label>
              </Col>
              <Col>
                <input
                  type="text"
                  name="email"
                  value={user.email}
                  onChange={handleInputChange}
                />
              </Col>
            </Form.Row>
          </Form.Group>
          <Form.Group controlId="Phone">
            <Form.Row>
              <Col>
                <Form.Label>Phone</Form.Label>
              </Col>
              <Col>
                <input
                  type="text"
                  name="phone"
                  value={user.phone}
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
