import { authActions } from "./auth-actions";
import {
  createUser,
  loginUser,
  logoutUser,
  fetchCurrentUser,
} from "../../API/contacts-api";
import axios from "axios";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const register = (credential) => async (dispatch) => {
  dispatch(authActions.registerRequest());
  try {
    const data = await createUser(credential);
    token.set(data.token);
    dispatch(authActions.registerSuccess(data));
  } catch (error) {
    dispatch(authActions.registerError(error));
  }
};

export const login = (credential) => async (dispatch) => {
  dispatch(authActions.loginRequest());
  try {
    const data = await loginUser(credential);
    token.set(data.token);
    dispatch(authActions.loginSuccess(data));
  } catch (error) {
    dispatch(authActions.loginError(error));
  }
};

export const logout = () => async (dispatch) => {
  dispatch(authActions.logoutRequest());
  try {
    await logoutUser();
    token.unset();
    dispatch(authActions.logoutSuccess());
  } catch (error) {
    dispatch(authActions.logoutError(error));
  }
};

export const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: currentToken },
  } = getState();

  if (!currentToken) return;
  token.set(currentToken);
  dispatch(authActions.getCurrentUserRequest());
  try {
    const data = await fetchCurrentUser();

    dispatch(authActions.getCurrentUserSuccess(data));
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error));
  }
};
