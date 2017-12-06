import {ADD_COLUMN} from './../const/column'

const initialState = {
    column: [{column:1,id:1}],
    row: [{row:1,id:1}],
    id: {
      idRow:1,
      idColumn:1,
      value:1,
      id:1
    }
  }

function addColumn(state = initialState, action) {
    console.log(action)
    switch (action.type) {
      case ADD_COLUMN:
        return  state = Object.assign({ column:[...state.column,{column:state.column[0].column++}] }, state);
      default: return state;
    }
  }

  export default addColumn;