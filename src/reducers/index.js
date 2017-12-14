import { combineReducers } from 'redux';

import cells from './cells';
import row from './row';
import column from './column';

const reducer = combineReducers({
  cells,
  column,
  row,
});

export default reducer;
