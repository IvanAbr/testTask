import {ADD_COLUMN} from './../const/column'

const initialState = [
    {idColumn:Math.round(Math.random()*1000)}
]

function addColumn(state = initialState, action) {
    switch (action.type) {
      case ADD_COLUMN:
        return [...state, {idColumn:Math.round(Math.random()*1000)}];
      default: return state;
    }
  }

  export default addColumn;