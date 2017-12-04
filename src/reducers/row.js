import initialState from './../initialState'
export default function addRow(state = [{row: 1,idRow:1}], action) {
    if (action.type === 'ADD_ROW') {
      return state = [...state, {row:state[0].row++,idRow:state[0].idRow++}];
    }
    return state;
  }
  
  