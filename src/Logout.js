import { useContext } from "react";
import { userContext } from "./providers/UserProvider";
const Logout = () => {
  const { dispatch } = useContext(userContext);
  return (
    <>
      <button onClick={() => dispatch({ type: "LOGOUT_USER" })}>Logout</button>
    </>
  );
};

export default Logout;
