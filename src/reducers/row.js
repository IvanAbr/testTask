import initialState from './../initialState'
export default function addRow(state = [{row: 1,id:1}], action) {
    if (action.type === 'ADD_ROW') {
      return state = [...state, {row:state[0].row++,id:state[0].id++}];
    }
    return state;
  }
  
  