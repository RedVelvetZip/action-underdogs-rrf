import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import BetDetails from './components/bets/BetDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateBet from './components/bets/CreateBet'
import CbbBets from './components/bets/CbbBets'
import BetSlipNew from './components/bets/BetSlipNew'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/'component={Dashboard} />
            <Route path='/bet/:id' component={BetDetails} />
            {/* <Route path='/betslip/:gameid' component={BetSlipNew} /> */}
            <Route path='/betslip' component={BetSlipNew} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateBet} />
            <Route path='/cbbbets' component={CbbBets} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;