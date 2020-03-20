import React from 'react'
import BetSummary from './BetSummary'
import { Link } from 'react-router-dom'

const BetList = ({bets}) => {
  return (
    <div className="bet-list section">
      { bets && bets.map(bet => {
        return (
          <Link to={'/bet/' + bet.id} key={bet.id}>
            <BetSummary bet={bet} />
          </Link>
        )
      })}  
    </div>
  )
}

export default BetList