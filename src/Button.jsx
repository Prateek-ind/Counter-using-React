import React from "react";

const Button = (props) => {
  return (
    <button
      className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white px-5 py-2 rounded shadow-md text-lg mx-1"
      onClick={props.clickHandler}
    >
      {props.value}
    </button>
  );
};

export default Button;
