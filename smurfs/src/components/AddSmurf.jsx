import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import uuid from "uuid/v1";
import { addSmurf } from "../actions/";

function AddSmurf() {
  const [smurf, setSmurf] = useState({
    name: "",
    height: 0,
    age: 0
  });

  const dispatch = useDispatch();

  const handleChange = e => {
    setSmurf({ ...smurf, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    const newSmurf = {
      ...smurf,
      id: uuid()
    };
    dispatch(addSmurf(newSmurf));
  };

  return (
    <form onSubmit={submitForm}>
      <input type="text" name="name" onChange={handleChange} />
      <input type="text" name="height" onChange={handleChange} />
      <input type="text" name="age" onChange={handleChange} />
      <button type="submit">Add Smurf</button>
    </form>
  );
}

export default AddSmurf;
