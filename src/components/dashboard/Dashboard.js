import React, { Component } from 'react'
import BetList from '../bets/BetList'
import Notifications from './Notifications'
import { connect } from 'react-redux'

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
  return {
    bets: state.bet.bets
  }
}

export default connect(mapStateToProps)(Dashboard)