import React from "react";

function dropdown(props) {
  let options = [];
  props.list.forEach((val, ind) => {
    options.push(
      <option key={ind} value={val}>
        {val}
      </option>
    );
  });
  return (
    <div>
      <label>{props.label}</label>
      <select onChange={props.onChange} name={props.name}>
        {options}
      </select>
    </div>
  );
}
export default dropdown;
