import React, { useEffect, useState } from "react";
import EmployeeData from "./EmployeeData";
import axios from "axios";
import { useSelector } from "react-redux";

// const DATA = [
//   {
//     id: 1,
//     firstName: "Muhammad",
//     lastName: "Yameen",
//     email: "yameen@gmail.com",
//     phone: "+9213589248",
//   },
//   {
//     id: 2,
//     firstName: "Muhammad",
//     lastName: "Yameen",
//     email: "yameen@gmail.com",
//     phone: "+9213589248",
//   },
// ];
function EmployeeList() {
  const [employeeData, setEmployeeData] = useState([]);
  const givenState = useSelector((state) => state.updateUI);
  console.log(givenState);
  const fetchData = async () => {
    const data = await axios.get("http://localhost:8080/");
    setEmployeeData(data.data.data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, [givenState]);

  const onDeleteHandler = async (id) => {
    const data = await axios.delete(`http://localhost:8080/delete/${id}`);
    fetchData();
    // console.log(id);
  };
  return (
    <section className=" bg-primaryColor w-full p-8">
      <div className=" w-1/2  flex flex-col gap-4 m-auto p-4 text-white">
        <h1 className="mt-8 text-xl font-semibold">Current Employees</h1>
        {employeeData.map((data) => (
          <EmployeeData
            id={data._id}
            key={data._id}
            firstName={data.firstName}
            lastName={data.lastName}
            email={data.email}
            phone={data.phone}
            onClick={() => onDeleteHandler(data._id)}
          />
        ))}
      </div>
    </section>
  );
}

export default EmployeeList;
