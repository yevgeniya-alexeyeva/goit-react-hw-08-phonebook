import { createAction } from "@reduxjs/toolkit";

const changeFilter = createAction("changeFilter");

const fetchContactsRequest = createAction("contacts/fetchContactsRequest");
const fetchContactsSuccess = createAction("contacts/fetchContactsSuccess");
const fetchContactsError = createAction("contacts/fetchContactsError");

const addContactRequest = createAction("contacts/addContactRequest");
const addContactSuccess = createAction("contacts/addContactSuccess");
const addContactError = createAction("contacts/addContactError");

const removeContactRequest = createAction("contacts/removeContactRequest");
const removeContactSuccess = createAction("contacts/removeContactSuccess");
const removeContactError = createAction("contacts/removeContactError");

export const actions = {
  changeFilter,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
};
