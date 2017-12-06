import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

function Buttons(props) {
  console.log(props)
  return (
    <div className="buttons">
      <button type="button" onClick={props.row} >Add row</button>
      <button type="button" onClick={props.column} >Add column</button>
    </div>
  );
}

Buttons.propTypes = {
  row: PropTypes.func.isRequired,
  column: PropTypes.func.isRequired,
}

export default Buttons;
