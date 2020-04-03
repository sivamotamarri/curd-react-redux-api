import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Form, Button, Col } from "react-bootstrap";
const AddUserForm = props => {
  const initialFormState = { id: null, name: "", email: "", phone: "" };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = event => {
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
          onSubmit={event => {
            event.preventDefault();
            if (!user.name || !user.email || !user.phone) return;

            props.addUser(user);
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
          <Form.Group controlId="phone">
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
