import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cell from './components/Cell/Cell.jsx';
import Buttons from './components/Button/Button.jsx';
import { AddCell } from './actions/table';
import { AddColumn } from './actions/table';
import { ChangeValue } from './actions/table';
import { asyncLocalStorage } from './actions/localStorage';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.addRow = this.addRow.bind(this);
    this.addColumn = this.addColumn.bind(this);
    this.changeValue = this.changeValue.bind(this);
  }

addRow(a) {
  let rows = ++a.target.value;
  console.log(rows+' Row')
  let column = 0;
  this.props.getCell();
}

addColumn(a) {
  let rows = 0;
  let column = ++a.target.value;
  console.log(column+' Column')
  this.props.getColumn(rows,column);
}

changeValue(a) {
  this.props.changeVal(a.target.value, a.target.name, a.target.id);
  }

counterVal() {

}

componentDidMount() {
  this.props.getLocalStorage();
}

render() {
    console.log(this.props)
  return (
    <div className = 'main'>
      <Buttons  row={this.addRow} column={this.addColumn}/>
      <Cell val={this.changeValue}/>
    </div>
    );
  }
}

App.propTypes = {
    getCell: PropTypes.func.isRequired,
    getLocalStorage: PropTypes.func.isRequired,
}

export default connect(
  state => ({  }),
  dispatch => ({
      getCell: () => {
          dispatch(AddCell())
      },
      getColumn: () => {
          dispatch(AddColumn())
      },
    //   changeVal: (value,idColumn,idRow) => {
    //       dispatch(ChangeValue(value,idColumn,idRow))
    //   },
      getLocalStorage: () => {
        dispatch(asyncLocalStorage())
      } 
  })
)(App);
