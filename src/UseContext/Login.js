import React, { useContext } from "react";
import { AppContext } from "./ContextTutorial";

function Login() {
  const { setUsername } = useContext(AppContext);

  return (
    <div>
      <input className='pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-25 border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500'
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
    </div>
  );
}

export default Login;