import axios from "axios";

const BASE_URI = "http://dummy.restapiexample.com/api/v1";

export default function getUserDetails() {
  try {
    const uri = BASE_URI + "/employees";
    const response = getData(uri);
    return response;
  } catch (e) {
    return { error: e.message };
  }
}

async function getData(uri) {
  const response = await axios.get(uri);
  const data = await response.data.data;
  return data;
}

export async function createUserDetails(user) {
  try {
    const uri = BASE_URI + "/create";
    const response = await axios.post(uri, {
      name: user.employee_name,
      salary: user.employee_salary,
      age: user.employee_age,
    });
    const data = await response.data.data;
    console.log("response");
    console.log(response);
    return data;
  } catch (e) {
    return { error: e.message };
  }
}

export async function updateUserDetails(user) {
  try {
    const userData = user;

    const uri = BASE_URI + "/update/" + user.id;
    const response = await axios.put(uri, {
      name: user.employee_name,
      salary: user.employee_salary,
      age: user.employee_age,
    });
    const data = await response.data;
    if (data.status === "success") {
      return userData;
    }
  } catch (e) {
    return { error: e.message };
  }
}

export async function deleteUserDetails(id) {
  try {
    const uri = BASE_URI + "/delete/" + id;
    const response = await axios.delete(uri);
    const data = await response.data;
    if (data.status === "success") {
      return data;
    }
  } catch (e) {
    return { error: e.message };
  }
}
