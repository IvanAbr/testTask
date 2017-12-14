import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

function Button({ handleFunc,text }) {
  return (
      <button type="button" onClick={handleFunc}>{text}</button>
  );
}

Button.propTypes = {
  handleFunc: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default Button;
