const initState = {}
  
const betReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_BET_SUCCESS':
      console.log('create bet success');
      return state;
    case 'CREATE_BET_ERROR':
      console.log('create bet error');
      return state;
    default:
      return state;
  }
};

export default betReducer;