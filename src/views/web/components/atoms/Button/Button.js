import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ handleClick, children }) => (
  <div onClick={handleClick}>{children}</div>
);

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
};

export default Button;
