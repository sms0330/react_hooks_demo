import { useEffect, useState } from "react";

const User = () => {
  const [value, setValue] = useState(0);
  const [user, setUser] = useState(null);

  //This useEffect will be called on every render
  useEffect(() => {
    console.log("This component was mounted");
  });

  //This useEffect will be called only once
  useEffect(() => {
    console.log("This use effect is being called just once");
  }, []);

  //This useEffect will be called only if user value will change
  useEffect(() => {
    console.log("This is new user value", user);
  }, [user]);

  useEffect(() => {
    return () => {
      //call some api or do other things
      console.log("This is the clean up function");
    };
  }, []);

  return (
    <div>
      This is user component
      <p>The current value is {value}</p>
      <button onClick={() => setValue(value + 1)}>Change value</button>
      <button onClick={() => setUser({ name: "user1" })}>Change user</button>
    </div>
  );
};

export default User;
