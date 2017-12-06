export const asyncLocalStorage = (a) => dispatch => {
    dispatch({ type: 'GET_LOCAL_STORAGE', async: localStorage.setItem('row','anothertest') })
}
  
  