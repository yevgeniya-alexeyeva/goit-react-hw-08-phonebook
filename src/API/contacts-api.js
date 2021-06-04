import axios from "axios";
// import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

//contacts

export const fetchContacts = () => {
  return axios.get("/contacts").then((response) => response.data);
};

export const addContact = (contact) => {
  return axios.post("/contacts", contact).then(({ data }) => {
    return data;
  });
};

export const deleteContact = (contactId) => {
  return axios.delete(`/contacts/${contactId}`);
};

//auth

export const createUser = (credentials) => {
  return axios.post("/users/signup", credentials).then(({ data }) => {
    return data;
  });
};

export const loginUser = (credentials) => {
  return axios.post("/users/login", credentials).then(({ data }) => {
    return data;
  });
};

export const logoutUser = () => axios.post("/users/logout");

export const fetchCurrentUser = () => {
  return axios.get("/users/current").then(({ data }) => {
    return data;
  });
};

// For next Home Work

// export const createUser = createAsyncThunk(
//   "auth/register",
//   async (credentials) => {
//     const { data } = await axios.post("/users/signup", credentials);
//     return data;
//   }
// );

// export const loginUser = createAsyncThunk("auth/login", async (credentials) => {
//   const { data } = await axios.post("/users/login", credentials);
//   return data;
// });

// export const logoutUser = createAsyncThunk("auth/logout", async () => {
//   await axios.post("/users/logout");
// });

// export const fetchCurrentUser = createAsyncThunk(
//   "auth/getCurrentUser",
//   async () => {
//     const { data } = await axios.get("/users/current");
//     return data;
//   }
// );
