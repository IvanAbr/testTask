import { ADD_ROW } from './../const/row';

function addRow(state = [ {idRow: 1}], action) {
  console.log(action)
  switch (action.type) {
    case  ADD_ROW:
      return  state = [...state, {idRow:state[0].idRow++}];
  default: return state;
  }
}
  
export default addRow;