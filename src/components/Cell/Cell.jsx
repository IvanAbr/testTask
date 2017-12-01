import React from 'react';
import { connect } from 'react-redux';
import './Cell.scss';

class Cell extends React.PureComponent {
  constructor(props) {
  super(props);
  console.log(props)
  this.state = {
    number: 1,
    click: false
  }
  this.changeVal = this.changeVal.bind(this);
  this.changeClick = this.changeClick.bind(this); 
}

changeVal(event) {
  const number = event.target.value;
  console.log(number);
  this.setState({ number });
}

changeClick() {
  this.setState({
    click: !this.state.click,
  });
  const click = this.state.click ? 'true' : 'false'
}

selectColumn(a) {
    console.log('Selected column '+a.target.id);
}

render() {
    console.log(this.props)
  return (
    <div >
      <table>
        <caption>Table</caption>
        <tbody>
          {this.props.column.map((a)=>
          <td 
              key={a.id} 
              onClick={this.selectColumn}>
              <button id={a.id}>Select</button>
          </td>
          )}
          {this.props.row.map((a)=>
              <tr key={a.id}>
          {this.props.column.map((a)=>
              <td 
                onClick={this.changeClick} 
                className="cell_container"
                key={a.id}>
              <input 
                type="text"
                value={a.column}
                onChange={this.props.val}
                name={a.id}/>
              </td>)}
              </tr>)}
        </tbody>
      </table>
    </div>
  );
}
}

const Val = (a) => {
    console.log(a);
}

export default connect(
    state => ({ 
        row: state.row,
        column: state.column,
        value: Val(state.value),
    }),
    dispatch => ({ })
  )(Cell);
