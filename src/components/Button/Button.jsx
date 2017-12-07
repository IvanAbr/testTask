import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

function Button(props) {
  console.log(props)
  return (
      <button type="button" onClick={props.handleFunc}>{props.text}</button>
  );
}

Button.propTypes = {
  handleFunc: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default Button;
