import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSmurf } from "../actions/";

function AddSmurf() {
  const dispatch = useDispatch();
  return (
    <form>
      <input type="text" name="name" />
      <input type="text" name="height" />
      <input type="text" name="age" />
      <button type="submit">Button</button>
    </form>
  );
}

export default AddSmurf;
