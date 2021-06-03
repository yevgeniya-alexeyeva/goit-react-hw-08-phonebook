import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { actions } from "./contacts-actions";

const userContacts = createReducer([], {
  [actions.fetchContactsSuccess]: (_, { payload }) => payload,
  [actions.addContactSuccess]: (state, { payload }) => [...state, payload],
  [actions.removeContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [actions.fetchContactsRequest]: () => true,
  [actions.fetchContactsSuccess]: () => false,
  [actions.fetchContactsError]: () => false,
  [actions.addContactRequest]: () => true,
  [actions.addContactSuccess]: () => false,
  [actions.addContactError]: () => false,
  [actions.removeContactRequest]: () => true,
  [actions.removeContactSuccess]: () => false,
  [actions.removeContactError]: () => false,
});

const error = createReducer(null, {
  [actions.fetchContactsError]: (_, { payload }) => payload,
  [actions.fetchContactsRequest]: () => null,
  [actions.addContactError]: (_, { payload }) => payload,
  [actions.addContactRequest]: () => null,
  [actions.removeContactError]: (_, { payload }) => payload,
  [actions.removeContactRequest]: () => null,
});

const items = combineReducers({
  userContacts,
  loading,
  error,
});

const filter = createReducer("", {
  [actions.changeFilter]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
  items,
  filter,
});

export default contactsReducer;
