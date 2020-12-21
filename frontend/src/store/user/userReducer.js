import { createReducer } from "@reduxjs/toolkit";
import * as ua from "./userActions";
const initialState = {
  firstName: "bobby",
  lastName: "joe",
  age: 1,
  signedIn: false,
};

const userReducer = createReducer(initialState, {
  [ua.setUserFirstNameAction]: (state, action) => {
    return { ...state, firstName: action.payload.firstName };
  },
  [ua.setUserLastNameAction]: (state, action) => {
    return state;
  },

  [ua.addToAgeAction]: (state, action) => {
    console.log(action);
    return { ...state, age: state.age + action.payload.number };
  },
  [ua.subtractFromAgeAction]: (state, action) => {
    return { ...state, age: state.age - action.payload.number };
  },
  [ua.signInAction]: (state, action) => {
    return {
      ...state,
      signedIn: true,
      firstName: action.payload.user.firstName,
      lastName: action.payload.user.lastName,
      age: parseInt(action.payload.user.age),
      email: action.payload.user.email,
    };
  },
  [ua.signOutAction]: (state, action) => {
    return { ...state, signedIn: false };
  },
  [ua.resetAgeAction]: (state, action) => {
    return { ...state, age: 0 };
  },
});

export default userReducer;
