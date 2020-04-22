import { put, takeLatest } from "redux-saga/effects";
import getUserDetails, {
  createUserDetails,
  updateUserDetails,
  deleteUserDetails,
} from "../server/Api";

import {
  ADD_USER,
  ADD_USER_SUCCEEDED,
  ADD_USER_FAILED,
  REMOVE_USER,
  REMOVE_USER_SUCCEEDED,
  REMOVE_USER_FAILED,
  EDIT_USER,
  EDIT_USER_SUCCEEDED,
  EDIT_USER_FAILED,
  FETCH_USERS_SUCCEEDED,
  FETCH_USERS_FAILED,
  GET_USERS,
} from "../components/actions/action-types/user-actions";

function* fetchUsers(action) {
  try {
    const users = yield getUserDetails();

    yield put({ type: FETCH_USERS_SUCCEEDED, payload: users });
  } catch (e) {
    yield put({ type: FETCH_USERS_FAILED, message: e.message });
  }
}

function* updateUser(user) {
  try {
    const users = yield updateUserDetails(user.payload);
    yield put({ type: EDIT_USER_SUCCEEDED, payload: users });
  } catch (e) {
    yield put({ type: EDIT_USER_FAILED, error: e.message });
  }
}

function* deleteUser(user) {
  try {
    const res = yield deleteUserDetails(user.id);
    yield put({ type: REMOVE_USER_SUCCEEDED, id: user.id });
  } catch (e) {
    yield put({ type: REMOVE_USER_FAILED, error: e.message });
  }
}

function* createUser(user) {
  try {
    const data = yield createUserDetails(user.payload);
    yield put({ type: ADD_USER_SUCCEEDED, payload: data });
  } catch (e) {
    yield put({ type: ADD_USER_FAILED, error: e.message });
  }
}

export function* usersSaga() {
  console.log("From SAGA -------");
  yield takeLatest(GET_USERS, fetchUsers);
}

export function* editUserSaga() {
  console.log("From SAGA -------");
  yield takeLatest(EDIT_USER, updateUser);
}

export function* createUserSaga() {
  console.log("Fron SAGA Create User --------");
  yield takeLatest(ADD_USER, createUser);
}

export function* deleteUserSaga() {
  console.log("from saga delete");
  yield takeLatest(REMOVE_USER, deleteUser);
}
export default {
  usersSaga,
  editUserSaga,
  createUserSaga,
  deleteUserSaga,
};
