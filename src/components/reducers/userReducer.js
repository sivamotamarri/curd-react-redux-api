import {
  ADD_USER,
  REMOVE_USER,
  EDIT_USER,
  SEARCH_USER,
  DELETE_SELECTED_USERS
} from "../actions/action-types/user-actions";

const initState = {
  users: [
    { id: 1, name: "siva", email: "siva@gmail.com", phone: "9999999999" },
    {
      id: 2,
      name: "ramakrishna",
      email: "ramakrishna@gmail.com",
      phone: "33333333333"
    },
    { id: 3, name: "sravan", email: "sravan@gmail.com", phone: "5555555555" }
  ],
  initialFormState: { id: null, name: "", email: "", phone: "" },
  addedUsers: [],
  total: 0
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_USER:
      const user = action.payload;
      const users = state.users;
      user.id = users.length + 1;
      const updatedUsers = [...users, user];
      return {
        ...state,
        users: updatedUsers
      };
    case REMOVE_USER:
      return {
        ...state
      };
    case EDIT_USER:
      return {
        ...state
      };
    case SEARCH_USER:
      return {
        ...state
      };
    case DELETE_SELECTED_USERS:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default userReducer;
