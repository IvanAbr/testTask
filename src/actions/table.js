import {ADD_CELL, ADD_ROW, ADD_COLUMN, CHANGE_VALUE} from './../consts/consts';


export const addCell = ( id, value ) => ({
  type: ADD_CELL,
  id,
  value
});

export const addRow = () => ({
    type: ADD_ROW,
})

export const addColumn = () => ({
  type: ADD_COLUMN,
});


