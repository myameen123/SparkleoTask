import React, { useState } from "react";
import Input from "./Input";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

function Form() {
  const dispatch = useDispatch();
  const givenState = useSelector((state) => state.updateUI);
  console.log(givenState);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = await axios.post("http://localhost:8080/add", formData);
    if (givenState) dispatch({ type: "updateUI", payload: false });
    else dispatch({ type: "updateUI", payload: true });
    console.log(data);
    setFormData({ firstName: "", lastName: "", email: "", phone: "" });
  };
  const onAllClearHandler = () => {
    setFormData({ firstName: "", lastName: "", email: "", phone: "" });
  };
  return (
    <div className=" w-full relative">
      <form
        onSubmit={submitHandler}
        className=" flex flex-col w-full justify-center items-center "
      >
        <Input
          id="firstName"
          type="text"
          title="First Name"
          value={formData.firstName}
          onChange={onChangeHandler}
        />
        <Input
          id="lastName"
          type="text"
          title="Last Name"
          value={formData.lastName}
          onChange={onChangeHandler}
        />
        <Input
          id="email"
          type="email"
          title="Email"
          value={formData.email}
          onChange={onChangeHandler}
        />
        <Input
          id="phone"
          type="text"
          title="Phone"
          value={formData.phone}
          onChange={onChangeHandler}
        />
        <div className=" w-4/5  flex gap-4 justify-end px-4 mb-4">
          <button className=" bg-primaryColor p-2 rounded-full w-20 text-white">
            ADD
          </button>
        </div>
      </form>
      <button
        onClick={onAllClearHandler}
        className=" text-slate-400 absolute bottom-5 right-1/4"
      >
        CLEAR ALL
      </button>
    </div>
  );
}

export default Form;
