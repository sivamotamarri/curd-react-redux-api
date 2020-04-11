import {
  ADD_USER,
  REMOVE_USER,
  EDIT_USER,
  SEARCH_USERS,
  HANDLE_CHANGE,
  SET_DELETE_USERS,
  DELETE_SELECTED_USERS,
} from "./action-types/user-actions";

export const addUser = ({ id, name, email, phone }) => {
  return {
    type: ADD_USER,
    payload: { id, name, email, phone },
  };
};
//remove item action
export const removeUser = (id) => {
  return {
    type: REMOVE_USER,
    id: id,
  };
};
//subtract qt action
export const editUser = ({ id, name, email, phone }) => {
  return {
    type: EDIT_USER,
    payload: { id, name, email, phone },
  };
};
//add qt action
export const searchUsers = () => {
  return {
    type: SEARCH_USERS,
  };
};

export function handleChange(text) {
  return {
    type: HANDLE_CHANGE,
    text: text,
  };
}

export function deleteSelectedUsers() {
  return {
    type: DELETE_SELECTED_USERS,
  };
}

export function setDeleteUsers(id) {
  return {
    type: SET_DELETE_USERS,
    user_id: id,
  };
}
