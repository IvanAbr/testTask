import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Cell.scss';
import Row from './../Row/Row.jsx';
import Column from './../Column/Column.jsx';

class Table extends React.PureComponent {
  constructor(props) {
  super(props);
  this.selectColumn = this.selectColumn.bind(this); 
}

selectColumn(e) {
    console.log('Selected column '+e.target.id);
}

render() {
  return (
     
    <div>
      <table>
        <caption>Table</caption>
        <tbody>
          <tr>
            {this.props.column.map((a)=>
              <Column 
                key={a.idColumn} 
                button={<button onClick={this.selectColumn} id={a.idColumn}>Select</button>}
              />
            )}
          </tr>
          {this.props.row.map((a)=>
            <tr key={a.idRow} id={a.idRow}>
              {this.props.column.map((item)=>
                <Column 
                  key={item.idColumn} 
                  classForName={"cell_container"} 
                  input={<input id={a.idRow} type="text" value={a.value} onChange={this.props.val} name={item.idColumn}/>}
                />
              )}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
 }
}

Table.propTypes = {
    val: PropTypes.func.isRequired
}

export default connect(
    state => ({ 
        cells: state.cells,
        row: state.row,
        column: state.column,
        id: state.cells.id,
    }),
    dispatch => ({ })
  )(Table);


//   <tr>
//   {this.props.column.map((a)=>
//     <td 
//       key={a.idColumn} 
//       onClick={this.selectColumn}>
//       <button id={a.idColumn}>Select</button>
//     </td>
//   )}
// </tr>
// {this.props.cells.map((a)=>
//   <tr key={a.idRow} id={a.idRow}>
//     {this.props.column.map((item)=>
//       <td 
//         onClick={this.changeClick} 
//         className="cell_container"
//         key={item.idColumn}>
//        <input 
//          id={a.idRow}
//          type="text"
//          value={a.value}
//          onChange={this.props.val}
//          name={item.idColumn}/>
//       </td>)}
//   </tr>)}

  // let rowsLocal = JSON.stringify(this.props.row);
    // localStorage.setItem('state row', rowsLocal); 
    // let localValue = (localStorage.getItem('state row'));
    // console.log(localValue);
    // let tests = JSON.parse(localValue);
    // console.log(tests);
    // localStorage.setItem('state column', this.props.column.map((a)=>a.column));
    // localStorage.setItem('state value', this.props.value.map((a)=>a.value)); 