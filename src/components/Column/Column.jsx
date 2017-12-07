import React from 'react';
import PropTypes from 'prop-types';

function Column(props) {
  return (
      <td className={props.classForName}>{props.button}{props.input}</td>
  );
}

Column.propTypes = {
  classForName: PropTypes.string,
  button:PropTypes.node,
  input:PropTypes.node
}

export default Column;