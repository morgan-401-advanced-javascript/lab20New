import React from "react";
/**
 * Function that generates an input text for users. 
 * @function inputBox 
 * @param {object} props uses props.label, props.onChange, props.name, & props.value
 */
function inputBox(props) {
  return (
    <div>
      <label>{props.label}</label>
      <input
        type="text"
        onChange={props.onChange}
        name={props.name}
        value={props.value}
      />
    </div>
  );
}

export default inputBox;
