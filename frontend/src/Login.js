import { useDispatch } from "react-redux";
import { signInAction } from "./store/user/userActions";
import axios from "axios";
import { API } from "./config";
import { useState } from "react";

const Login = () => {
  const dispatch = useDispatch();
  const [showLoginInputs, setShowLoginInputs] = useState(false);
  const [email, setEmail] = useState("");
  const handleLogin = async () => {
    const response = await axios.get(`${API}/user?email=${email}`);
    console.log(response);
    if (response.data.user) {
      dispatch(signInAction({ user: response.data.user })); // need to pass user data from request to set in reducer
    } else {
      setEmail("");
      alert("Incorrect Credentials");
    }
  };

  return (
    <>
      {showLoginInputs ? (
        <>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <button onClick={handleLogin}>Submit</button>
          <button onClick={() => setShowLoginInputs(false)}>Back</button>
        </>
      ) : (
        <button onClick={() => setShowLoginInputs(true)}>Login</button>
      )}
      <h1>Welcome To Our App</h1>
    </>
  );
};

export default Login;
