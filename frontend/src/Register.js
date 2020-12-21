import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { API } from "./config";
import { signInAction } from "./store/user/userActions";
const Register = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [showRegisterInputs, setShowRegisterInputs] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const handleRegister = async () => {
    const response = await axios.post(`${API}/user`, {
      email,
      firstName,
      lastName,
      age,
    });
    console.log(response);
    dispatch(signInAction({ user: response.data.user }));
  };

  return (
    <div>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        placeholder={"First Name"}
        value={firstName}
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <input
        placeholder={"Last Name"}
        value={lastName}
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => {
          setAge(parseInt(e.target.value));
        }}
      />
      <button onClick={handleRegister}>Register</button>
      Register Page
    </div>
  );
};

export default Register;
