const initState = {
    bets: [
      {id: '1', title: 'help me find peach', content: 'blah blah blah'},
      {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
      {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'}
    ]
  }
  
  const betReducer = (state = initState, action) => {
    switch (action.type) {
      case 'CREATE_BET':
        console.log('create bet', action.bet);
    }
    return state;
  };
  
  export default betReducer;