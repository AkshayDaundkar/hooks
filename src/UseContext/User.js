import React, { useContext } from "react";
import { AppContext } from "./ContextTutorial";

function User() {
  const { username } = useContext(AppContext);

  return (
    <div>
      <h1 className='text-xl font-bold  m-2 text-center' >User: {username}</h1>
    </div>
  );
}

export default User;