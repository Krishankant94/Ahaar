import React from "react";

const Button = ({ children, onClick, primary, secondary }) => {
  return (
    <button
      className={`btn ahaar-btn ${primary && "btn-primary-ah"}  ${secondary &&
        "btn-secondary-ah"}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
