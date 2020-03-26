import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import moment from 'moment';

const BetDetails = (props) => {
  const { auth } = props;
  if (!auth.uid) {
    return <Redirect to="/signin" />;
  }

  const { bet } = props;
  if (bet) {
    return (
      <div className="container section bet-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{bet.title}</span>
            <p>{bet.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {bet.authorFirstName} {bet.authorLastName}</div>
            <div>{moment(bet.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container center">
      <p>Loading bet...</p>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  const { bets } = state.firestore.data;
  const bet = bets ? bets[id] : null;

  return {
    bet,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'bets' },
  ]),
)(BetDetails);