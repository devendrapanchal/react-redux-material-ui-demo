import * as types from "./action-type";
import axios from "axios";
const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});
const userDeleted = () => ({
  type: types.DELETE_USER,
});
const userAdded = (user) => ({
  type: types.ADD_USER,
  payload: user,
});
const getUser = (user) => ({
  type: types.GET_SINGLE_USER,
  payload: user,
});

const userUpdated = (user) => ({
  type: types.UPDATE_USER,
  payload: user,
});

export const loadUsers = () => {
  return function (dispatch) {
    axios
      .get(`http://localhost:5000/user`)
      .then((resp) => {
        console.log("resp", resp.data);
        dispatch(getUsers(resp.data));
      })
      .catch((error) => console.log("error", error));
  };
};

export const deleteUsers = (id) => {
  return function (dispatch) {
    axios
      .delete(`http://localhost:5000/user/${id}`)
      .then((resp) => {
        console.log("resp", resp.data);
        dispatch(userDeleted());
        dispatch(loadUsers());
      })
      .catch((error) => console.log("error", error));
  };
};

export const addUser = (user) => {
  return function (dispatch) {
    axios
      .post(`http://localhost:5000/user`, user)
      .then((resp) => {
        console.log("resp", resp.data);
        dispatch(userAdded(user));
        // dispatch(loadUsers());
      })
      .catch((error) => console.log("error", error));
  };
};

export const getSingleUsers = (id) => {
  return function (dispatch) {
    axios
      .get(`http://localhost:5000/user/${id}`)
      .then((resp) => {
        console.log("resp", resp.data);
        dispatch(getUser(resp.data));
      })
      .catch((error) => console.log("error", error));
  };
};

export const updateUser = (user, id) => {
  return function (dispatch) {
    axios
      .put(`http://localhost:5000/user/${id}`, user)
      .then((resp) => {
        console.log("resp", resp.data);
        dispatch(userUpdated());
      })
      .catch((error) => console.log("error", error));
  };
};
