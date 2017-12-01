import initialState from './../initialState'
export default function changeValue(state = [], action) {
    if (action.type === 'CHANGE_VALUE') {
      return {value:action.value,id:action.id};
    }
    return state;
  }
  
  