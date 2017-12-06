import {ADD_CELL} from '../const/cell';
import {ADD_COLUMN} from '../const/column';
import {CHANGE_VALUE} from '../const/value';

export const AddCell = (idRow,idColumn,value) => ({
  type: ADD_CELL,
  idRow,
  idColumn,
  value
});

export const AddColumn = (column) => ({
  type: ADD_COLUMN,
  column
});

export const ChangeValue = (value,idColumn,idRow) => ({
  type: CHANGE_VALUE,
  value,
  idColumn,
  idRow
  })

