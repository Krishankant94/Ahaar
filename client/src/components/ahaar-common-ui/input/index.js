import React from "react";
import PropTypes from "prop-types";

const Input = ({
  label,
  name,
  value,
  type,
  onChange,
  className,
  placeholder,
  error
}) => (
  <>
    <label>{label}</label>
    <input
      id={name}
      name={name}
      value={value}
      type={type}
      onChange={onChange}
      className={`${className} ${error ? "is-invalid" : ""} form-control`}
      placeholder={placeholder}
    />
    {error && <p className="invalid-feedback">{error}</p>}
  </>
);
Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "number", "password"]),
  className: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired
};

export default Input;
