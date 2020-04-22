import React, { useState, Fragment, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import AddUserForm from "../components/AddUserForm";
import EditUserForm from "../components/EditUserForm";
import UserTable from "../components/UserTable";
import ActionBar from "../components/ActionBar";
import { useSelector, useDispatch } from "react-redux";
import { searchUsers, getUsers } from "../components/actions/userActions";

//import config from "./config";
//import Firebase from "firebase";

const App = (props) => {
  const dispatch = useDispatch();
  const { users } = props;
  // dispatch(getUsers());

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

  useEffect(() => {
    console.log("in effect");
    dispatch(getUsers());
  }, []);

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
      employee_name: user.employee_name,
      employee_salary: user.employee_salary,
      employee_age: user.employee_age,
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
                  users={users}
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

// const mapStateToProps = ({ users }) => {
//   return {
//     users,
//   };
// };

// const mapActionsToProps = (dispatch) => {
//   return bindActionCreators(
//     {
//       getUsers,
//     },
//     dispatch
//   );
// };

// export default connect(mapStateToProps, mapActionsToProps)(App);
export default App;
