import {
  ADD_USER,
  REMOVE_USER,
  EDIT_USER,
  SEARCH_USER
} from "./action-types/user-actions";

export const addUser = ({ id, name, email, phone }) => {
  return {
    type: "ADD_USER",
    payload: { id, name, email, phone }
  };
};
//remove item action
export const removeUser = ({ id, name, email, phone }) => {
  return {
    type: "REMOVE_USER",
    payload: { id, name, email, phone }
  };
};
//subtract qt action
export const editUser = ({ id, name, email, phone }) => {
  return {
    type: "EDIT_USER",
    payload: { id, name, email, phone }
  };
};
//add qt action
export const searchUser = ({ id, name, email, phone }) => {
  return {
    type: "SEARCH_USER",
    payload: { id, name, email, phone }
  };
};
