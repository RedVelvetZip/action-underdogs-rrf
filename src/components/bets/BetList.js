import React from 'react';
import { Link } from 'react-router-dom';

import BetSummary from './BetSummary';

const BetList = ({ bets }) => (
  <div className="bet-list section">
    {bets && bets.map(bet => (
      <Link to={`/bet/${bet.id}`} key={bet.id}>
        <BetSummary bet={bet} />
      </Link>
    ))}
  </div>
);

export default BetList;