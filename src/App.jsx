import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cell from './components/Cell/Cell.jsx';
import Button from './components/Button/Button.jsx';


class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.addRow = this.addRow.bind(this);
    this.addColumn = this.addColumn.bind(this);
    this.changeValue = this.changeValue.bind(this);
}

addRow() {
  var counter = (function(){
    var row = {row:1,id:1};
      return function() {
        return {row:row.row++,id:row.id++};
      }
    }())
    this.props.getRow(counter());
}

addColumn() {
  const column = {column: 2,id:2};
  this.props.getColumn(column);
  this.props.changeVal(column.column, column.id);
}

changeValue(a) {
  console.log(a.target)  
  this.props.changeVal(a.target.value, a.target.name);
  this.value = a.target.value
  this.forceUpdate();
  }

render() {
  localStorage.setItem('row', 'row')
  return (
    <div className = 'container'>
      <Button row={this.addRow} column={this.addColumn}/>
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
      changeVal: (value,id) => {
          dispatch({ type: 'CHANGE_VALUE', value, id })
      } 
  })
)(App);
