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
  }

  addRow() {
    var counter = (function(){
        var row = {row:1,id:1};
        return function() {
            return {row:row.row++,id:row.id++};
        }
    }())

    // const rowPlus = function(){return initial.row++};
    // const columnPlus = function(){return initial.column++};
    // const row =  {"row": initial.row + rowPlus(), "column": initial.column + columnPlus()}
    console.log(counter());
    console.log(counter())
    var b= counter();
    this.props.getRow(b) ;
    return counter()
  }

  addColumn() {
    const column =  {column: 2,id:1};
    this.props.getColumn(column)
  }

  render() {
    localStorage.setItem('row', 'row')
    return (
        <div>
          <Button row={this.addRow} column={this.addColumn}/>
          <div className = 'container'>
            <Cell />
          </div>
        </div> 
    );
  }
}
// const SortMovies = (movies, filter) => {
//   console.warn(movies)
//   switch (filter) {
//     case 'SHOW_DATA':
//       return movies.sort((a, b) =>
//         (b.show.premiered ? b.show.premiered.replace(/-/g, '') : '2000') - (a.show.premiered ? a.show.premiered.replace(/-/g, '') : '2000'));
//     case 'SHOW_RATING':
//       return movies.sort((a, b) => b.show.rating.average - a.show.rating.average);
//     default:
//       throw new Error(`Unknown filter:  ${filter}`);
//   }
// };
// const Async = (async) => {
//   return async.sort((a, b) => a.score - b.score);
// }

// const Boo = (boo) => {
//   return boo.reverse();
// }


export default connect(
  state => ({  }),
  dispatch => ({
      getRow: (row) => {
          dispatch({type: 'ADD_ROW', row })
      },
      getColumn: (column) => {
          dispatch({ type: 'ADD_COLUMN', column })
      }
  }),

)(App);
