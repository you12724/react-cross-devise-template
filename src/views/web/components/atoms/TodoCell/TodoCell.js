import React from 'react';
import PropTypes from 'prop-types';

const TodoCell = ({children}) => (
  <div>{children}</div>
);

TodoCell.propTypes = {
  children: PropTypes.string.isRequired
};

export default TodoCell;
