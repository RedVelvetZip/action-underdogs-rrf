const initState = {
    bets: [
      {id: '1', title: 'base bet', content: 'blah blah blah'},
      {id: '2', title: 'yeeter', content: 'blah blah blah'},
      {id: '3', title: 'simping for JS', content: 'blah blah blah'}
    ]
  }
  
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
  // const betReducer = (state = initState, action) => {
  //   switch (action.type) {
  //     case 'CREATE_BET': {
  //       console.log('bet created below')
  //       console.log('create bet', action.bet);
  //       console.log('done')
  //       break;
  //     }
  //       // return action.payload;
  //     default:
  //       return state;
  //   }
  // };
  
  export default betReducer;