import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
// import ActivityFeed from './ActivityFeed'
import BetList from '../bets/BetList'
import MyBetList from '../bets/MyBetList'

class Dashboard extends Component {
  render() {
    // console.log(this.props);
    // const { bets, auth, notifications } = this.props;
    const { bets, auth } = this.props;
    if (!auth.uid) {
      return <Redirect to="/signin" />;
    }

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <MyBetList bets={bets} />
          </div>
          <div className="col s12 m5 offset-m1">
            <BetList bets={bets} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    bets: state.firestore.ordered.bets,
    auth: state.firebase.auth,
    // notifications: state.firestore.ordered.notifications,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'bets', orderBy: ['createdAt', 'desc'] },
    // { collection: 'notifications', limit: 3, orderBy: ['time', 'desc'] },
  ]),
)(Dashboard);