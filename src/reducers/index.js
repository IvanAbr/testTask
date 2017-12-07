import { combineReducers } from 'redux';

import cells from './cells';
import row from './row';
import column from './column';
import value from './value';
import async from './localStorage';

const reducer = combineReducers({
  cells,
  column,
  row,
  value
  //async
});

export default reducer;
