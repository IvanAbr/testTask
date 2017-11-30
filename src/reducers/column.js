
export default function addColumn(state = [{column: 1, id: 1}], action) {
    if (action.type === 'ADD_COLUMN') {
      return state = [...state,{column:action.column.column,id:action.column.id}];
    }
    return state;
  }
  
  