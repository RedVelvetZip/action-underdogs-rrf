import React from 'react'

const BetSummary = ({bet}) => {
  return (
    <div className="card z-depth-0 bet-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{bet.title}</span>
        <p>Posted by The Net Ninja</p>
        <p className="grey-text">3rd September, 2am</p>
      </div>
    </div>
  )
}

export default BetSummary