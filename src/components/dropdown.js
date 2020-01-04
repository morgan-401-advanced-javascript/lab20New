import React from "react";

/**
 * This function creates a dropdown list for users based on the props.list given by parent
 * @function dropdown
 * @param {object} props uses props.item props.onChange, props.name, & props.label
 */
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
