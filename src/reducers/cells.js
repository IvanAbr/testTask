import {ADD_CELL} from './../consts/consts';
var shortid = require('shortid');

const initialState = {
    ['id '+shortid.generate()] : {
    value:'',
    id:shortid.generate()
  }
}

function addCell(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case  ADD_CELL:
      return  {...state, ['id '+shortid.generate()] : {id:action.id,value:action.value}};
  default: return state;
  }
}
  
export default addCell;