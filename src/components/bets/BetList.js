import React from 'react'
import BetSummary from './BetSummary'

const BetList = ({bets}) => {
  return (
    <div className="bet-list section">
      { bets && bets.map(bet => {
        return (
          <BetSummary bet={bet} key={bet.id} />
        )
      })}  
    </div>
  )
}

export default BetList