import { useContext } from "react";
import { userContext } from "./providers/UserProvider";
import { mockLogin } from "./utils/login";

const Login = () => {
  const { dispatch } = useContext(userContext);
  return (
    <>
      <p>Please log in</p>
      <button
        onClick={() => dispatch({ type: "LOGIN_USER", payload: mockLogin() })}
      >
        Login
      </button>
    </>
  );
};

export default Login;
