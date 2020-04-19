import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import createBet from '../../store/actions/betActions';

class BetSlipNew extends Component {
  state = {
    title: '',
    content: '',
    amount: 0,
  }

  handleChange = (e) => {
    const { target } = e;

    this.setState(state => ({
      ...state,
      [target.id]: target.value,
    }));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    const { props, state } = this;
    props.createBet(state);

    // props.history.push('/');
  }

  render() {
    const { auth } = this.props;
    if (!auth.uid) {
      return <Redirect to="/signin" />;
    }

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <div className="input-field">
            <label htmlFor="amount">Amount</label>
            <textarea name="amount" id="amount" cols="10" rows="1" className="materialize-textarea" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            {/* TODO: right now this creates empty bet. move it to confirmation page instead. */}
            <button type="submit" className="btn pink lighten-1 z-depth-0">Continue</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.firebase.auth,
});

const mapDispatchToProps = dispatch => ({
  createBet: bet => dispatch(createBet(bet)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BetSlipNew);