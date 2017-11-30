import React from 'react';
import { connect } from 'react-redux';
import './Cell.scss';
const GetRow = (a) => {
    const abba = a; 
    console.log(a)
};
const GetColumn = (b) =>{
    const babba = b;
    console.log(b)
} 
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
      console.log(GetRow)
     
    }

    changeVal(event) {
        const number = event.target.value;
        this.setState({ number });
    }

    changeClick() {
        this.setState({
            click: !this.state.click,
          });
          const click = this.state.click ? 'true' : 'false'
    }

    addReact() {
         const elem = <tr>
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                    </tr>
    return elem    
} 

selectColumn() {
    console.log('column')
}

render() {
    console.log(this.props)
  return (
    <div >
    <table>
        
        <caption>Table</caption>
        <tbody>
            {this.props.column.map((a,index)=>
            <td key = {index} onClick={this.selectColumn}>
                <span>Hi</span>
            </td>)}
            
            {this.props.row.map((a,index)=>
            
            <tr key={index}>
            
            {this.props.column.map((a,index)=>
            <td key={index} onClick={this.changeClick} 
                className="cell_container">
            <input 
            type="text"
            value={this.state.number}
            onChange={this.changeVal}
            name={"number1"}/>
            </td>)}
            {/* <td onClick={this.changeClick} className="cell_container">
            <input 
            type="text"
            value={this.state.number}
            onChange={this.changeVal}
            name={"number2"}/>
            </td> */}
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
        column: state.column
    }),
    dispatch => ({  }),
  
  )(Cell);
