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
  }).then(() => dispatch({
    type: 'CREATE_PROJECT',
    bet,
  })).catch(err => dispatch({
    type: 'CREATE_PROJECT_ERROR',
    err,
  }));
};

export default createBet;