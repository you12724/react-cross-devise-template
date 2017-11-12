import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TextField from '../../atoms/TextField/TextField';

class TextFormComponent extends Component {

  render() {
    const { handleChange, children, value } = this.props;
    return (
      <div>
        <p>{children}</p>
        <TextField handleChange={handleChange} value={value} />
      </div>
    );
  }
}

TextFormComponent.propTypes = {
  handleChange: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default TextFormComponent;
