import React, { useState, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddUserForm from "../components/AddUserForm";
import EditUserForm from "../components/EditUserForm";
import UserTable from "../components/UserTable";
import ActionBar from "../components/ActionBar";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  addUser,
  removeUser,
  editUser,
  searchUser
} from "../components/actions/userActions";
//import config from "./config";
//import Firebase from "firebase";

const App = () => {
  //Firebase.initializeApp(config.firebase);
  const state = useSelector(state => state);
  const usersData = useSelector(state => state.users);
  const dispatch = useDispatch();

  // Data
  /*const usersData = [
    { id: 1, name: "siva", email: "siva@gmail.com", phone: "9999999999" },
    {
      id: 2,
      name: "ramakrishna",
      email: "ramakrishna@gmail.com",
      phone: "33333333333"
    },
    { id: 3, name: "sravan", email: "sravan@gmail.com", phone: "5555555555" }
  ];*/

  const initialFormState = useSelector(state => state.initialFormState); //{ id: null, name: "", email: "", phone: "" };

  // Setting state
  const [users, setUsers] = useState(usersData);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);
  const [newModalShow, setNewModalShow] = React.useState(false);
  const [editModalShow, setEditModalShow] = React.useState(false);

  // CRUD operations
  const addUser = user => {
    user.id = users.length + 1;
    dispatch(addUser(user));
    //setUsers([...users, user]);
  };

  const updateNewModal = modal => {
    setNewModalShow(modal);
  };
  const updateEditModal = modal => {
    setEditModalShow(modal);
  };

  const deleteUser = id => {
    setEditing(false);

    setUsers(users.filter(user => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  };

  const editRow = user => {
    setEditing(true);

    setCurrentUser({
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone
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
                  updateUser={updateUser}
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
                <ActionBar updateNewModal={updateNewModal} />
                <UserTable
                  users={users}
                  editRow={editRow}
                  deleteUser={deleteUser}
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
