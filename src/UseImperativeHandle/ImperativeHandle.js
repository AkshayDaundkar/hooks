import React, { useRef } from "react";
import Button from "./Button";

function ImperativeHandle() {
  const buttonRef = useRef(null);
  return (
    <div className="text-center items-center">
        <br></br>
      <button
        className="text-xl align-center m-5 p-5 bg-blue-600"
        onClick={() => {
          buttonRef.current.alterToggle();
        }}
      >
        Button From Parent
      </button><br></br>
      <Button ref={buttonRef} />
    </div>
  );
}

export default ImperativeHandle;