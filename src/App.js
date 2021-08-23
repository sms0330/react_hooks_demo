import "./App.css";
import Count from "./Count";
import User from "./User";
import Registration from "./Registration";
import { useState } from "react";

function App() {
  const [showUser, setShowUser] = useState(false);
  return (
    <div className="App">
      {/* <Count /> */}
      <button onClick={() => setShowUser((value) => !value)}>
        toggle user
      </button>
      {showUser && <User />}

      <Registration />
    </div>
  );
}

export default App;
