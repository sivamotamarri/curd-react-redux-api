import {
  FETCH_USERS_SUCCEEDED,
  ADD_USER,
  REMOVE_USER,
  REMOVE_USER_SUCCEEDED,
  EDIT_USER,
  SEARCH_USERS,
  DELETE_SELECTED_USERS,
  HANDLE_CHANGE,
  SET_DELETE_USERS,
  ADD_USER_SUCCEEDED,
  EDIT_USER_SUCCEEDED,
} from "../actions/action-types/user-actions";

const initState = {
  users: [
    { id: 1, employee_name: "siva", employee_salary: 32000, employee_age: 32 },
    {
      id: 2,
      employee_name: "ramakrishna",
      employee_salary: 33000,
      employee_age: 36,
    },
    {
      id: 3,
      employee_name: "sravan",
      employee_salary: 34000,
      employee_age: 35,
    },
  ],
  initialFormState: {
    id: null,
    employee_name: "",
    employee_salary: "",
    employee_age: "",
  },
  searchText: "",
  searchedUsers: [],
  deleteUsers: [],
};
const findUsers = (users, text) => {
  return users.filter((user) =>
    user.employee_name.toLowerCase().includes(text.toLowerCase())
  );
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_USERS_SUCCEEDED:
      console.log("asdsadasd");
      console.log(action.payload);
      return {
        ...state,
        users: action.payload,
      };

    case ADD_USER_SUCCEEDED:
      const userPayload = action.payload;
      const newUser = {
        id: userPayload.id,
        employee_name: userPayload.name,
        employee_salary: userPayload.salary,
        employee_age: userPayload.age,
      };
      const currentUsers = state.users;
      const updatedUserList = [...currentUsers, newUser];
      return {
        ...state,
        searchedUsers: [],
        users: updatedUserList,
      };
    case REMOVE_USER_SUCCEEDED:
      const leftusers = state.users.filter((user) => user.id !== action.id);
      return {
        ...state,
        searchedUsers: [],
        users: leftusers,
      };

    case EDIT_USER_SUCCEEDED:
      const updatedUser1 = action.payload;
      const editUsers1 = state.users;
      const updatedUsersList1 = editUsers1.map((user) =>
        user.id === updatedUser1.id ? updatedUser1 : user
      );

      return {
        ...state,
        searchedUsers: [],
        users: updatedUsersList1,
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
