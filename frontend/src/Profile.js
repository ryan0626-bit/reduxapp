import { useDispatch, useSelector } from "react-redux";
import {
  resetAgeAction,
  addToAgeAction,
  signOutAction,
  subtractFromAgeAction,
  setUserFirstNameAction,
} from "./store/user/userActions";
import { useState } from "react";

const Profile = () => {
  const { firstName, lastName, age } = useSelector(({ user }) => ({
    firstName: user.firstName,
    lastName: user.lastName,
    age: user.age,
  }));
  const dispatch = useDispatch();

  const [number, setNumber] = useState(0);

  return (
    <>
      <input
        value={firstName}
        onChange={(e) => {
          dispatch(setUserFirstNameAction({ firstName: e.target.value }));
        }}
      />
      <input
        value={lastName}
        onChange={(e) => {
          dispatch();
        }}
      />
      <input
        value={age}
        type="Number"
        onChange={(e) => {
          dispatch();
        }}
      />
      <button
        onClick={() => {
          dispatch(signOutAction());
        }}
      >
        Sign Out
      </button>

      <button
        onClick={() => {
          dispatch(addToAgeAction({ number: number }));
        }}
      >
        Add 4 To Age
      </button>
      <input
        type="number"
        onChange={(e) => {
          setNumber(parseInt(e.target.value));
        }}
      />
      <button
        onClick={() => {
          dispatch(subtractFromAgeAction({ number: number }));
        }}
      >
        - 6
      </button>
      <button
        onClick={() => {
          dispatch(resetAgeAction());
        }}
      >
        reset
      </button>
    </>
  );
};

export default Profile;
