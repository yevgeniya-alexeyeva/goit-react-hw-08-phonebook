import { actions } from "./contacts-actions";
import * as api from "../../API/contacts-api";
// import shortid from "shortid";

export const getContacts = () => async (dispatch) => {
  dispatch(actions.fetchContactsRequest());

  try {
    const contacts = await api.fetchContacts();
    dispatch(actions.fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(actions.fetchContactsError(error));
  }
};

export const addContact = (name, number) => async (dispatch) => {
  const contact = {
    name: name,
    number: number,
  };
  dispatch(actions.addContactRequest());

  try {
    const contacts = await api.addContact(contact);
    dispatch(actions.addContactSuccess(contacts));
  } catch (error) {
    dispatch(actions.addContactError(error));
  }
};

export const removeContact = (contactId) => async (dispatch) => {
  dispatch(actions.removeContactRequest());

  try {
    await api.deleteContact(contactId);
    dispatch(actions.removeContactSuccess(contactId));
  } catch (error) {
    dispatch(actions.removeContactError(error));
  }
};
