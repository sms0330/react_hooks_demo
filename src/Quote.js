import { useEffect, useLayoutEffect, useState, useRef } from "react";
const Quote = () => {
  const usersRef = useRef(null);
  const [users, setUsers] = useState([]);

  useLayoutEffect(() => {
    console.log(
      "Users ref dimensions from useLayoutEffect are ",
      usersRef.current.getBoundingClientRect()
    );
  }, [users]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));

    console.log(
      "Users ref dimensions from useEffect are ",
      usersRef.current.getBoundingClientRect()
    );
  }, []);
  return (
    <>
      <div ref={usersRef}>
        {users.map((user) => (
          <div key={user.id}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
};

export default Quote;
