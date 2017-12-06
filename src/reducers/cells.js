import {ADD_CELL} from './../const/cell';

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

function addCell(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case  ADD_CELL:
      return  state = Object.assign({ id: {idRow:state.id.idRow++,idColumn:state.id.idColumn++,value:state.id.value++,id:state.id.id++}},state);
  default: return state;
  }
}
  
export default addCell;