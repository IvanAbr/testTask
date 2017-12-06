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
    if (this.props.value.idColumn==a.target.id) {
        this.props.row.map((item)=>console.log(item))
    }
    // const data = (this.props.value.filter((item,i,arr)=>item.idColumn==a.target.id));
    //console.log(data);  
}

render() {
    // let rowsLocal = JSON.stringify(this.props.row);
    // localStorage.setItem('state row', rowsLocal); 
    // let localValue = (localStorage.getItem('state row'));
    // console.log(localValue);
    // let tests = JSON.parse(localValue);
    // console.log(tests);
    // localStorage.setItem('state column', this.props.column.map((a)=>a.column));
    // localStorage.setItem('state value', this.props.value.map((a)=>a.value)); 
  return (
     
    <div>
      <table>
        <caption>Table</caption>
        <tbody>
          <tr>
            {/* {this.props.column.map((a)=>
              <td 
                key={a.idColumn} 
                onClick={this.selectColumn}>
                <button id={a.idColumn}>Select</button>
              </td>
            )} */}
          </tr>
          {/* {this.props.cells.map((a)=>
            <tr key={a.idRow} id={a.idRow}>
              {this.props.column.map((item)=>
                <td 
                  onClick={this.changeClick} 
                  className="cell_container"
                  key={item.idColumn}>
                 <input 
                   id={a.idRow}
                   type="text"
                   value={a.value}
                   onChange={this.props.val}
                   name={item.idColumn}/>
                </td>)}
            </tr>)} */}
        </tbody>
      </table>
    </div>
  );
 }
}

export default connect(
    state => ({ 
        cells: state.cells,
        column: state.column,
        value: state.value,
    }),
    dispatch => ({ })
  )(Cell);


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