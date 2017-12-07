import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cell from './components/Cell/Cell.jsx';
import Button from './components/Button/Button.jsx';
import { getCell, addRow, addColumn, changeValue } from './actions/table';
import { asyncLocalStorage } from './actions/localStorage';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.addRow = this.addRow.bind(this);
    this.addColumn = this.addColumn.bind(this);
    this.changeValue = this.changeValue.bind(this);
  }

addRow(e) {
  this.props.handleRow();
}

addColumn(e) {
  this.props.handleColumn();
}

changeValue(e) {
  console.log( e.target.id,e.target.name,e.target.value);
  this.props.getCell( e.target.id,e.target.name,e.target.value, Math.round(Math.random()*1000));
}

componentDidMount() {
  this.props.getLocalStorage();
}

render() {
    console.log(this.props)
  return (
    <div className = 'main'>
      <div  className="buttons" >
        <Button text={'Add row'} handleFunc={this.addRow} />
        <Button text={'Add column'} handleFunc={this.addColumn} />
      </div>
      <Cell val={this.changeValue}/>
    </div>
    );
  }
}

App.propTypes = {
    getCell: PropTypes.func.isRequired,
    getLocalStorage: PropTypes.func.isRequired,
    handleColumn: PropTypes.func.isRequired,
    handleRow: PropTypes.func.isRequired
}

export default connect(
 null,
  dispatch => ({
      getCell: (idRow,idColumn,value,id) => {
          dispatch(getCell(idRow,idColumn,value, id))
      },
      handleColumn: () => {
          dispatch(addColumn())
      },
      handleRow: () => {
          dispatch(addRow())
      },
    //   changeVal: (value,idColumn,idRow) => {
    //       dispatch(changeValue(value,idColumn,idRow))
    //   },
      getLocalStorage: () => {
        dispatch(asyncLocalStorage())
      } 
  })
)(App);
