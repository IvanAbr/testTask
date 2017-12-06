import {CHANGE_VALUE} from './../const/value'

function changeValue(state = [], action) {
  switch (action.type)  {
    case CHANGE_VALUE:
      return {value:action.value,idColumn:action.idColumn,idRow:action.idRow};
    default:return state;
  }
}
  
export default changeValue;  