const async = (state = [], action) => {
    switch (action.type) {
      case 'GET_LOCAL_STORAGE':
        return state;
      default: return state;
    }
  }
  export default async;
  