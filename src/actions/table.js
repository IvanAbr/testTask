import {GET_CELL} from '../const/cell';
import {ADD_ROW} from '../const/row';
import {ADD_COLUMN} from '../const/column';
import {CHANGE_VALUE} from '../const/value';

export const GetCell = (idRow,idColumn,value) => ({
  type: GET_CELL,
  idRow,
  idColumn,
  value
});

export const AddRow = (row) => ({
    type: ADD_ROW,
    row
})

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

