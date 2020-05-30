import React from 'react';

import PropTypes from 'prop-types';

export const FormInput = ({ label, type, name, isRequired, handleChange }) => (
  <div className="form-group">
    <label htmlFor={label}>{label}:</label>
    <input
      id={label}
      className="form-control"
      type={type}
      name={name}
      required={isRequired}
      onChange={handleChange}
    />
  </div>
);

FormInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  isRequired: PropTypes.bool,
  handleChange: PropTypes.func,
};
