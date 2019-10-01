import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVillage } from "../actions/";

function Village() {
  const store = useSelector(state => state.asyncReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>This village contains:</h1>
      {store.smurfs.map(smurf => {
        return (
          <div key={smurf.id}>
            <p>{smurf.name}</p>
            <p>{smurf.height}</p>
            <p>{smurf.age}</p>
            <p>{smurf.id}</p>
          </div>
        );
      })}
      <button onClick={() => dispatch(getVillage())}>Pull Smurfs</button>
    </div>
  );
}

export default Village;
