import {ADD_COLUMN} from './../consts/consts'

var shortid = require('shortid');

const initialState = [
    {idColumn:shortid.generate()}
]

function addColumn(state = initialState, action) {
    switch (action.type) {
      case ADD_COLUMN:
        return [...state, {idColumn:shortid.generate()}];
      default: return state;
    }
  }

  export default addColumn;