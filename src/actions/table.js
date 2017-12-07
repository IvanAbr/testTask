import {GET_CELL, ADD_ROW, ADD_COLUMN, CHANGE_VALUE} from './../consts/consts';


export const getCell = (idRow,idColumn,value, id) => ({
  type: GET_CELL,
  idRow,
  idColumn,
  value, 
  id
});

export const addRow = (row) => ({
    type: ADD_ROW,
    row
})

export const addColumn = (column) => ({
  type: ADD_COLUMN,
  column
});

export const changeValue = (value,idColumn,idRow) => ({
  type: CHANGE_VALUE,
  value,
  idColumn,
  idRow
  })

