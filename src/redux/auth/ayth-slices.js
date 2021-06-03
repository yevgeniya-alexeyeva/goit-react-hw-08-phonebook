// import { createSlice } from "@reduxjs/toolkit";
// import { register } from "../../API/contacts-api";

// const initialState = {
//   name: "",
//   email: "",
//   token: "",
//   loading: false,
//   error: "",
// };

// const registerUser = createSlice({
//   name: "auth",
//   initialState,
//   extraReducers: {
//     [register.pending]: (state) => {
//       state.loading = true;
//     },
//     [register.fulfilled]: (state, { payload }) => {
//       state.token = payload.token;
//       state.loading = false;
//     },
//     [register.rejected]: (state, { payload }) => {
//       state.error = payload.message;
//       state.loading = false;
//     },
//   },
// });

// export default registerUser.extraReducer;
