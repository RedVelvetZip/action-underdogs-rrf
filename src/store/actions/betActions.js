const createBet = bet => (dispatch, getState, { getFirestore }) => {
  const fireStore = getFirestore();
  const { profile } = getState().firebase;
  const authorId = getState().firebase.auth.uid;

  fireStore.collection('bets').add({
    ...bet,
    authorFirstName: profile.firstName,
    authorLastName: profile.lastName,
    authorId,
    createdAt: new Date(),
    amount: 1,
  }).then(() => dispatch({
    type: 'CREATE_BET',
    bet,
  })).catch(err => dispatch({
    type: 'CREATE_BET_ERROR',
    err,
  }));
};

export default createBet;