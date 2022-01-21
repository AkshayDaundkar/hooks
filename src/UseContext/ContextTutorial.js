import React, { useState, createContext } from "react";
import Login from "./Login";
import User from "./User";

export const AppContext = createContext(null);

function ContextTutorial() {
  const [username, setUsername] = useState("");

  return (
      <div className="text-center text-xl p-2 m-2 ">
        <h1 className='text-xl font-bold  m-2 text-center'>React UseContext</h1>
        <AppContext.Provider value={{ username, setUsername }}>
        <Login /> <User />
        </AppContext.Provider>
    </div>
  );
}

export default ContextTutorial;