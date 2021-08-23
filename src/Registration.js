import { useRef, useEffect, useState } from "react";

const Registration = () => {
  const inputRef = useRef();
  const [user, setUser] = useState({ email: "", password: "" });

  const updateForm = (event) => {
    // How to get input name
    const name = event.target.name;

    //how to update proper value
    setUser((u) => {
      return { ...u, [name]: event.target.value };
    });
  };

  // This is not a good solution
  //   const updateEmail = (newEmailValue) => {
  //     setUser((u) => {
  //       return { ...u, email: newEmailValue };
  //     });
  //   };

  //   This will be called just once
  useEffect(() => {
    //We can get reference to our input by using useRef hook
    inputRef.current.focus();
    console.log(
      "Dimensions of our input are ",
      inputRef.current.getBoundingClientRect()
    );
  }, []);
  return (
    <>
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
        ref={inputRef}
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

      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  );
};

export default Registration;
