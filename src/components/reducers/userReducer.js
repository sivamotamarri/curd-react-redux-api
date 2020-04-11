import {
  ADD_USER,
  REMOVE_USER,
  EDIT_USER,
  SEARCH_USERS,
  DELETE_SELECTED_USERS,
  HANDLE_CHANGE,
  SET_DELETE_USERS,
} from "../actions/action-types/user-actions";

const initState = {
  users: [
    { id: 1, name: "siva", email: "siva@gmail.com", phone: "9999999999" },
    {
      id: 2,
      name: "ramakrishna",
      email: "ramakrishna@gmail.com",
      phone: "33333333333",
    },
    { id: 3, name: "sravan", email: "sravan@gmail.com", phone: "5555555555" },
  ],
  initialFormState: { id: null, name: "", email: "", phone: "" },
  searchText: "",
  searchedUsers: [],
  deleteUsers: [],
};
const findUsers = (users, text) => {
  return users.filter(
    (user) =>
      user.name.toLowerCase().includes(text.toLowerCase()) ||
      user.email.toLowerCase().includes(text.toLowerCase())
  );
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
        searchedUsers: [],
        users: updatedUsers,
      };
    case REMOVE_USER:
      const leftusers = state.users.filter((user) => user.id !== action.id);
      return {
        ...state,
        searchedUsers: [],
        users: leftusers,
      };
    case EDIT_USER:
      const updatedUser = action.payload;
      const editUsers = state.users;
      const updatedUsersList = editUsers.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      );

      return {
        ...state,
        searchedUsers: [],
        users: updatedUsersList,
      };
    case SEARCH_USERS:
      const searchText = state.searchText;
      var searchedUsers = [];
      if (searchText.length > 0) {
        searchedUsers = findUsers(state.users, searchText);
      } else {
        searchedUsers = state.users;
      }

      return {
        ...state,
        searchText: "",
        searchedUsers: searchedUsers,
      };
    case DELETE_SELECTED_USERS: {
      const user_ids = state.deleteUsers;
      const users = state.users;
      user_ids.map((userId) =>
        users.splice(
          users.findIndex((user) => user.id === userId),
          1
        )
      );

      return {
        ...state,
        users: users,
        searchText: "",
        searchedUsers: [],
        deleteUsers: [],
      };
    }

    case SET_DELETE_USERS: {
      const user_id = action.user_id;
      const deleteUsers = [...state.deleteUsers];
      var updateDeleteUsers = [];
      if (deleteUsers.length === 0) {
        updateDeleteUsers = [...deleteUsers, user_id];
      } else {
        const userIndex = deleteUsers.indexOf(user_id);
        if (userIndex === -1) {
          updateDeleteUsers = [...deleteUsers, user_id];
        } else {
          deleteUsers.splice(userIndex, 1);
          updateDeleteUsers = deleteUsers;
        }
      }

      return {
        ...state,
        users: state.users,
        deleteUsers: updateDeleteUsers,
        searchText: "",
        searchedUsers: [],
      };
    }
    case HANDLE_CHANGE:
      const text = action.text;
      return {
        ...state,
        searchText: text,
      };
    default:
      return state;
  }
};

export default userReducer;
