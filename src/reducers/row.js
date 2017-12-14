import { ADD_ROW } from './../consts/consts';

var shortid = require('shortid');

const initialState = [
    {idRow:shortid.generate()}
]

function addRow(state = initialState, action) {
  switch (action.type) {
    case  ADD_ROW:
      return  [...state, {idRow:shortid.generate()}];
  default: return state;
  }
}
  
export default addRow;