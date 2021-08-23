import { useState } from "react";
import { register } from "./utils/register";

const Registration = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  const updateForm = (event) => {
    // How to get input name
    const name = event.target.name;

    //how to update proper value
    setUser((u) => {
      return { ...u, [name]: event.target.value };
    });
  };

  const registerLocal = (event) => {
    event.preventDefault();
    setTimeout(() => {
      register(user);
      setUser({ email: "", password: "" });
    }, 2000);

    // setUser({ email: "", password: "" });
  };

  return (
    <>
      <form onSubmit={(event) => registerLocal(event)}>
        <p>This is registration form</p>
        <span>Email:</span>
        <input
          value={user.email}
          name="email"
          onChange={(e) => {
            updateForm(e);
          }}
          type="email"
          placeholder="Please enter an email"
        />

        <br />

        <span>password:</span>
        <input
          value={user.password}
          name="password"
          onChange={(e) => {
            updateForm(e);
          }}
          type="password"
          placeholder="Please enter password"
        />

        <button type="submit">Register</button>
      </form>

      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  );
};

export default Registration;
