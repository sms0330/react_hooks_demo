import { useContext } from "react";
import { userContext } from "./providers/UserProvider";
const Profile = () => {
  const { user } = useContext(userContext);
  return (
    <>
      <hr />
      {user ? (
        <>
          <p>This is user profile</p>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
      ) : (
        "Please log in "
      )}
    </>
  );
};

export default Profile;
