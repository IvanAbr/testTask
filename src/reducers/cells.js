import {GET_CELL} from './../consts/consts';

const initialState = {
    id: {
    idRow:1,
    idColumn:1,
    value:1,
    id:Math.round(Math.random()*1000)
  }
}

function getCell(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case  GET_CELL:
      return  {...state, id: {idRow:action.idRow,idColumn:action.idColumn,value:action.value,id:state.id.id}};
  default: return state;
  }
}
  
export default getCell;