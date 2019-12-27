import React from "react";

function radio(props) {
  let options = [];
  props.list.forEach((val, ind) => {
    options.push(
      <div>
        <label>{val}</label>
        <input
          type="radio"
          name={props.name}
          key={ind}
          value={val}
          onChange={props.onChange}
        />
      </div>
    );
  });
  return (
    <div>
      <label>{props.label}</label>
      {options}
    </div>
  );
}

export default radio;
