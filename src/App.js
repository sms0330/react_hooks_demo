import "./App.css";
import Count from "./Count";
import User from "./User";
import Registration from "./Registration";
import { useState } from "react";
import Users from "./Users";
import CountV2 from "./CountV2";

function App() {
  const [showUser, setShowUser] = useState(false);
  return (
    <div className="App">
      {/* <Count />
      <button onClick={() => setShowUser((value) => !value)}>
        toggle user
      </button>
      {showUser && <User />}

      <Registration /> */}
      {/* <Users /> */}
      <CountV2 />
    </div>
  );
}

export default App;
