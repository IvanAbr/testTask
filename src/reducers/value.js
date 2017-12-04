import initialState from './../initialState'
export default function changeValue(state = [], action) {
    if (action.type === 'CHANGE_VALUE') {
      return [...state,{value:action.value,idColumn:action.idColumn,idRow:action.idRow}];
    }
    return state;
  }
  
  