export const createBet = (bet) => {
  return (dispatch, getState, {getFirestore}) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('bets').add({
      // ...bet,
      authorFirstName: 'Brad',
      authorLastName: 'Lee',
      authorId: 12346,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_BET_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_BET_ERROR' }, err);
    });
  }
};