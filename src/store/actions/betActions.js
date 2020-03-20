export const createBet = (bet) => {
    return (dispatch, getState) => {
      // make async call to database
      dispatch({ type: 'CREATE_BET', bet });
    }
  };