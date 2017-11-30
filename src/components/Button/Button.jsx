import React from 'react';
import './Button.scss';

function Button(props) {
    console.log(props)
  return (
    <div className="button_container">
    <button onClick={props.row} >Add row</button>
    <button onClick={props.column} >Add column</button>
    </div>
  );
}
export default Button;
