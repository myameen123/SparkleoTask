import React from "react";
import AddEmployee from "./Add/AddEmployee";
import EmployeeList from "./List/EmployeeList";

function Main() {
  return (
    <div className=" w-full">
      <AddEmployee />
      <EmployeeList />
    </div>
  );
}

export default Main;
