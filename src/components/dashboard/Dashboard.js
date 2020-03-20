import React, { Component } from 'react'
import BetList from '../bets/BetList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Dashboard extends Component {
  render() {
    
    // console.log(this.props);
    const { bets } = this.props;
    
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <BetList bets={bets} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    bets: state.firestore.ordered.bets
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'bets' }
  ])
)(Dashboard)