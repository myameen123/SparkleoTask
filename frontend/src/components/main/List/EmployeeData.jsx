import React from "react";
import { MdOutlineCancel } from "react-icons/md";
function EmployeeData({ firstName, lastName, email, phone, onClick }) {
  // console.log(id);
  const fullName = firstName + " " + lastName;
  return (
    <div className=" bg-boxCol p-6 rounded-md flex justify-between">
      <div className=" flex flex-col gap-2">
        <h1 className="text-xl font-semibold">{fullName}</h1>
        <span className=" text-sm">{email}</span>
        <span className=" text-sm">{phone}</span>
      </div>
      <div
        onClick={onClick}
        className=" text-2xl flex justify-center items-center cursor-pointer"
      >
        <MdOutlineCancel />
      </div>
    </div>
  );
}

export default EmployeeData;
