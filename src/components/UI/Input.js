import React from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label>
        {props.label}
        <input ref={ref} {...props.input} />
      </label>
    </div>
  );
});
export default Input;
