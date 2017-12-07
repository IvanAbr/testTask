import { ADD_ROW } from './../const/row';

const initialState = [
    {idRow:Math.round(Math.random()*1000)}
]

function addRow(state = initialState, action) {
  switch (action.type) {
    case  ADD_ROW:
      return  [...state, {idRow:Math.round(Math.random()*1000)}];
  default: return state;
  }
}
  
export default addRow;