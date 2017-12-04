import React from 'react';
import { connect } from 'react-redux';
import './Cell.scss';

class Cell extends React.PureComponent {
  constructor(props) {
  super(props);
  this.selectColumn = this.selectColumn.bind(this); 
}

selectColumn(a) {
    console.log('Selected column '+a.target.id);
    const data = (this.props.value.filter((b,i)=>b.idColumn==a.target.id && b.idRow!==i ));
    console.log(data);
}

render() {
    localStorage.setItem('row', '1');    
  return (
    <div >
      <table>
        <caption>Table</caption>
        <tbody>
          {this.props.column.map((a)=>
          <td 
              key={a.idColumn} 
              onClick={this.selectColumn}>
              <button id={a.idColumn}>Select</button>
          </td>
          )}
          {this.props.row.map((a)=>
              <tr key={a.idRow} id={a.idRow}>
          {this.props.column.map((item)=>
              <td 
                
                onClick={this.changeClick} 
                className="cell_container"
                key={item.idColumn}>
              <input 
                id={a.idRow}
                type="text"
                defaultValue={item.column}
                onChange={this.props.val}
                name={item.idColumn}/>
              </td>)}
              </tr>)}
        </tbody>
      </table>
    </div>
  );
}
}

export default connect(
    state => ({ 
        row: state.row,
        column: state.column,
        value: state.value,
    }),
    dispatch => ({ })
  )(Cell);
