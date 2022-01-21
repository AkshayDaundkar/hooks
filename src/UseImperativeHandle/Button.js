import React, { forwardRef, useImperativeHandle, useState } from "react";

const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));
  return (
    <>
      <button className="text-xl align-center m-5 p-5 bg-blue-600">Button From Child</button>
      <br></br>
      {toggle && <span className="text-xl text-bold text-center ">Toggle</span>}
    </>
  );
});

export default Button;