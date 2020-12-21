import { createAction } from "@reduxjs/toolkit";

export const setUserFirstNameAction = createAction(
  "user/setUserFirstNameAction"
);
export const setUserLastNameAction = createAction("user/setUserLastNameAction");
export const addToAgeAction = createAction("user/addToAgeAction");
export const subtractFromAgeAction = createAction("user/subtractFromAgeAction");
export const signInAction = createAction("user/signInAction");  
export const signOutAction = createAction("user/signOutAction");
export const resetAgeAction = createAction("user/resetAgeAction");