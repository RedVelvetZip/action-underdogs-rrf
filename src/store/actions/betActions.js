export const createBet = (bet) => {
  return (dispatch, getState, {getFirestore}) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('bets').add({
      ...bet,
      authorFirstName: 'Net',
      authorLastName: 'Ninja',
      authorId: 12345,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_BET_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_BET_ERROR' }, err);
    });
  }
};