import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cell from './components/Cell/Cell.jsx';
import Buttons from './components/Button/Button.jsx';


class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.addRow = this.addRow.bind(this);
    this.addColumn = this.addColumn.bind(this);
    this.changeValue = this.changeValue.bind(this);
}

addRow() {
  var counter = (function(){
    var row = {row:1,idRow:1};
      return function() {
        return {row:row.row++,idRow:row.idRow++};
      }
    }())
    this.props.getRow();
}

addColumn() {
  const column = {column: 2,idColumn:2};
  this.props.getColumn();
}

changeValue(a) {
  this.props.changeVal(a.target.value, a.target.name, a.target.id);
  }

render() {
  return (
    <div className = 'container'>
      <Buttons row={this.addRow} column={this.addColumn}/>
      <Cell val={this.changeValue}/>
    </div>
    );
  }
}

export default connect(
  state => ({  }),
  dispatch => ({
      getRow: (row) => {
          dispatch({type: 'ADD_ROW', row })
      },
      getColumn: (column) => {
          dispatch({ type: 'ADD_COLUMN', column })
      },
      changeVal: (value,idColumn,idRow) => {
          dispatch({ type: 'CHANGE_VALUE', value, idColumn, idRow })
      } 
  })
)(App);
