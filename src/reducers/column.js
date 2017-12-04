
export default function addColumn(state = [{column: 1, idColumn: 1}], action) {
    if (action.type === 'ADD_COLUMN') {
      return state = [...state, {column:state[0].column++,idColumn:state[0].idColumn++}];
    }
    return state;
  }
  
  