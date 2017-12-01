import { combineReducers } from 'redux';

import row from './row';
import column from './column';
import value from './value';


const reducer = combineReducers({
  row,
  column,
  value
});

export default reducer;
