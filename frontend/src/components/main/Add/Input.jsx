import React from "react";

function Input({ id, title, type, onChange, value }) {
  return (
    <div className="flex w-full justify-center items-center">
      <span className=" w-1/4 text-center">
        <label htmlFor={id}> {title} </label>
      </span>
      <input
        className=" m-4 w-1/2 h-10 border-2 border-primaryColor rounded-md p-2"
        type={type}
        id={id}
        name={id}
        onChange={onChange}
        value={value}
        required
      />
    </div>
  );
}

export default Input;
