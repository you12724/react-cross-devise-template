import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextField extends Component {

  render() {
    const { handleChange, value } = this.props;
    return (
      <div>
        <input type="text" value={value} onChange={ (event) => handleChange(event.target.value) }/>
      </div>
    );
  }
}

TextField.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default TextField;
