import React from "react";

const Button = (props) => {
  console.log(props.fullname);

  return (
    <div>
      {/* css will work with calss attribute but it shows a warning In valid 
        DOm property beacuse in react, class is a reseverd keyword */}
      <button class="abc">{props.fullname}</button>
    </div>
  );
};

export default Button;
Button.defaultProps = {
  fullname: "when there is no value in props",
};
