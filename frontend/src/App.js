import { useSelector } from "react-redux";
import Login from "./Login";
import Profile from "./Profile";
import Register from './Register'

function App() {
  const { signedIn } = useSelector(({ user }) => ({
    signedIn: user.signedIn,
  }));


  return (
    <div>
      {signedIn ? (
        <Profile  />
      ) : (
        <>
          <Register />
          <Login />
        </>
      )}
    </div>
  );
}

export default App;
