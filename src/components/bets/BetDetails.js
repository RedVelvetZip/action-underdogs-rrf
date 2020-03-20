import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const BetDetails = (props) => {
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
            <div>2nd September, 2am</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading bet...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const bets = state.firestore.data.bets;
  const bet = bets ? bets[id] : null
  return {
    bet: bet
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'bets'
  }])
)(BetDetails)