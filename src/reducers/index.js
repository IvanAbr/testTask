import { combineReducers } from 'redux';

import row from './row';
import column from './column';


const reducer = combineReducers({
  row,
  column
});

export default reducer;
