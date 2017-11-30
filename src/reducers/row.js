import initialState from './../initialState'
export default function addRow(state = [{row: 1,id:1}], action) {
    if (action.type === 'ADD_ROW') {
      return state = [...state, {row:action.row.row,id:action.row.id}];
    }
    return state;
  }
  
  