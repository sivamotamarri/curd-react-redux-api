import {
  ADD_USER,
  ADD_USER_SUCCEEDED,
  ADD_USER_FAILED,
  REMOVE_USER,
  EDIT_USER,
  EDIT_USER_SUCCEEDED,
  EDIT_USER_FAILED,
  SEARCH_USERS,
  HANDLE_CHANGE,
  SET_DELETE_USERS,
  DELETE_SELECTED_USERS,
  GET_USERS,
  FETCH_USERS,
  FETCH_USERS_SUCCEEDED,
  REMOVE_USER_SUCCEEDED,
  REMOVE_USER_FAILED,
} from "./action-types/user-actions";

export const addUser = (payload) => {
  return {
    type: ADD_USER,
    payload: payload,
  };
};

export const addUserSucceeded = (payload) => {
  return {
    type: ADD_USER_SUCCEEDED,
    payload: payload,
  };
};

export const addUserFailed = (error) => {
  return {
    type: ADD_USER_FAILED,
    error: error,
  };
};

export const fetchUsers = (payload) => {
  return {
    type: FETCH_USERS,
    payload: payload,
  };
};

export function getUsers() {
  return {
    type: GET_USERS,
  };
}

export const fetchUsersSucceeded = (payload) => {
  return {
    type: FETCH_USERS_SUCCEEDED,
    payload: payload,
  };
};

export const removeUser = (id) => {
  return {
    type: REMOVE_USER,
    id: id,
  };
};

export const removeUserSucceeded = (id) => {
  return {
    type: REMOVE_USER_SUCCEEDED,
    id: id,
  };
};

export const removeUserFAILED = (error) => {
  return {
    type: REMOVE_USER_FAILED,
    error: error,
  };
};

export const editUser = (payload) => {
  return {
    type: EDIT_USER,
    payload: payload,
  };
};
export const editUserSucceeded = (payload) => {
  return {
    type: EDIT_USER_SUCCEEDED,
    payload: payload,
  };
};

export const editUserFailed = (error) => {
  return {
    type: EDIT_USER_FAILED,
    error: error,
  };
};

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
