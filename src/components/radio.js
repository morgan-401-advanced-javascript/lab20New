import React from "react";
/**
 * function that create a radio input for users
 * @function radio
 * @param {object} props uses props.list, props.name, props.onChange, props.label
 */
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
    )
  });
  return (
    <div>
      <label>{props.label}</label>
      {options}
    </div>
  );
};

export default radio;
