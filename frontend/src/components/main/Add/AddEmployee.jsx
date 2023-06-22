import React from "react";
import Form from "./Form";

function AddEmployee() {
  return (
    <section className=" w-full h-screen flex justify-center items-center">
      <div className=" border-x-4 border-b-4 border-primaryColor w-1/2 max-h-max flex flex-col round">
        <div className=" w-full h-16 bg-primaryColor round text-white flex items-center">
          <p className=" ml-4">New Employee</p>
        </div>
        <div className=" h-full flex justify-center items-center w-full my-auto mt-4">
          <Form />
        </div>
      </div>
    </section>
  );
}

export default AddEmployee;
