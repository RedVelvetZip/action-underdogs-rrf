import React from 'react';
import moment from 'moment';

const BetSummary = ({ bet }) => (
  <div className="card z-depth-0 bet-summary">
    <div className="card-content grey-text text-darken-3">
      <span className="card-title">{bet.title}</span>
      <p>Posted by {bet.authorFirstName} {bet.authorLastName}</p>
      <p className="grey-text">{moment(bet.createdAt.toDate()).calendar()}</p>
    </div>
  </div>
);

export default BetSummary;