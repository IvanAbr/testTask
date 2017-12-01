
export default function addColumn(state = [{column: 1, id: 1}], action) {
    if (action.type === 'ADD_COLUMN') {
      return state = [...state, {column:state[0].column++,id:state[0].id++}];
    }
    return state;
  }
  
  