import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Table from './components/Cell/Cell.jsx';
import Button from './components/Button/Button.jsx';
import { addCell, addRow, addColumn, changeValue } from './actions/table';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.addRow = this.addRow.bind(this);
    this.addColumn = this.addColumn.bind(this);
    this.changeValue = this.changeValue.bind(this);
  }

addRow(e) {
  console.log(this.props.row, this.props.column)
  this.props.handleRow();
  this.props.column.map((item)=>this.props.addCell(item.idColumn));
}

addColumn(e) {
  this.props.handleColumn();
  this.props.row.map((item)=> this.props.addCell(item.idRow));
}

changeValue(e) {
  console.log( e.target.id,e.target.name,e.target.value);
  this.props.addCell(e.target.id,e.target.value);
}

render() {
    console.log(this.props)
  return (
    <div className = 'main'>
      <div  className="buttons" >
        <Button text={'Add row'} handleFunc={this.addRow} />
        <Button text={'Add column'} handleFunc={this.addColumn} />
      </div>
      <Table addCell={this.handleCell} handleValue={this.changeValue}/>
    </div>
    );
  }
}

App.propTypes = {
    addCell: PropTypes.func.isRequired,
    handleColumn: PropTypes.func.isRequired,
    handleRow: PropTypes.func.isRequired
}

export default connect(
  state => ({ 
    row: state.row,
    column: state.column,
    id: state.cells.id
   }),
  dispatch => ({
      addCell: ( id,value ) => {
          dispatch(addCell( id, value ))
      },
      handleRow: () => {
        dispatch(addRow())
    },
      handleColumn: () => {
          dispatch(addColumn())
      },
  })
)(App);
