import React, { useState, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddUserForm from "../components/AddUserForm";
import EditUserForm from "../components/EditUserForm";
import UserTable from "../components/UserTable";
import ActionBar from "../components/ActionBar";
import { useSelector, useDispatch } from "react-redux";
import { searchUsers } from "../components/actions/userActions";

//import config from "./config";
//import Firebase from "firebase";

const App = (props) => {
  const dispatch = useDispatch();

  const initialFormState = useSelector((state) => state.initialFormState); //{ id: null, name: "", email: "", phone: "" };

  // Setting state

  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);
  const [newModalShow, setNewModalShow] = React.useState(false);
  const [editModalShow, setEditModalShow] = React.useState(false);

  // CRUD operations
  //const addUser = (user) => {
  //user.id = users.length + 1;
  //dispatch(addUser(user));
  //setUsers([...users, user]);
  //};

  const updateNewModal = (modal) => {
    setNewModalShow(modal);
  };
  const updateEditModal = (modal) => {
    setEditModalShow(modal);
  };

  const searchUser = (text) => {
    dispatch(searchUsers(text));
  };

  //const deleteUser = (id) => {
  //setEditing(false);

  //setUsers(users.filter((user) => user.id !== id));
  //};

  //const updateUser = (id, updatedUser) => {
  //setEditing(false);

  //setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  //};

  const editRow = (user) => {
    setEditing(true);

    setCurrentUser({
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
    });
  };

  return (
    <div className="row mt-5">
      <div className="container">
        <h1>Users</h1>
        <div className="flex-row">
          <div className="flex-large">
            {editing ? (
              <Fragment>
                <EditUserForm
                  editing={editing}
                  show={editModalShow}
                  setEditing={setEditing}
                  currentUser={currentUser}
                  updateEditModal={updateEditModal}
                  onHide={() => setEditModalShow(false)}
                />
              </Fragment>
            ) : (
              <Fragment>
                <AddUserForm
                  show={newModalShow}
                  updateNewModal={updateNewModal}
                  onHide={() => setNewModalShow(false)}
                />
              </Fragment>
            )}
          </div>

          <div className="row mb-4">
            <div className="col-sm-12 grid-margin">
              <div className="card h-100">
                <ActionBar
                  updateNewModal={updateNewModal}
                  searchUsers={searchUser}
                />
                <UserTable
                  editRow={editRow}
                  updateEditModal={updateEditModal}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
