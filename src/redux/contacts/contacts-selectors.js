import { createSelector } from "reselect";

export const getAllContacts = (state) => state.contacts.items.userContacts;

export const getFilter = (state) => state.contacts.filter;

export const getIsLoading = (state) => state.contacts.items.loading;

export const getFilteredContacts = createSelector(
  [getAllContacts, getFilter],
  (items, filter) => {
    if (!filter) return items;
    const normalizedFilter = filter.toLowerCase().trim();
    return isNaN(normalizedFilter)
      ? items.filter((item) =>
          item.name.toLowerCase().includes(normalizedFilter)
        )
      : items.filter((item) => item.number.includes(normalizedFilter));
  }
);
