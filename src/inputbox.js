import React from "react";

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
