import React, { Component } from 'react';
// eslint-disable-next-line
import {DailyGamesCBB, AreGamesInProgress} from '../../api/http-common'
import Axios from 'axios';

const testingDate = 'https://api.sportsdata.io/v3/cbb/scores/json/GamesByDate/2020-MAR-07?key=44f9dca8c64945e6a140887d4ff5279d'

class CbbBets extends Component {
    constructor(props) {
        super(props)
        this.state={
            games:[],
            isLoading: false
        }
    }
    async componentDidMount() {
        this.setState({ isLoading: true });
        let result = null;
        try {
            // result = await Axios(DailyGamesCBB, {
            result = await Axios(testingDate, {
                headers: {
                    Accept: "application/json"
                }
            })
        } catch(e) {
            console.log(e)
        }
        this.setState({games: result.data, isLoading: false})
    }
    render() {
        const {games, isLoading} = this.state;
        console.log("from axios render begin")
        console.log({games})
        console.log("from axios render end")
        let mappedArray = games.map((games) => {
            return(
                <tr>
                    <td>{games.DateTime}</td>
                    <td>{games.AwayTeamID}<br></br>{games.HomeTeamID}</td>
                    <td>{games.AwayTeam}<br></br>{games.HomeTeam}</td>
                    <td>
                        <button className="button-spread" onclick='idAddButton_onclick();'>
                            {games.PointSpread}
                        </button>
                        <br></br>
                        <button className="button-spread" onclick='idAddButton_onclick();'>
                            {games.PointSpread}
                        </button>
                    </td>
                    <td>
                        <button className="button-spread" onclick='idAddButton_onclick();'>
                            o{games.OverUnder}
                        </button>
                        <br></br>
                        <button className="button-spread" onclick='idAddButton_onclick();'>
                            u{games.OverUnder}
                        </button>
                    </td>
                    <td>
                    <button className="button-spread" onclick='idAddButton_onclick();'>
                            {games.AwayTeamMoneyLine}
                        </button>
                        <br></br>
                        <button className="button-spread" onclick='idAddButton_onclick();'>
                            {games.HomeTeamMoneyLine}
                        </button>
                    </td>
                </tr>
            )
        })
        if (isLoading) {
            return (
                <div className="loading">
                <p>Loading ...</p>
                <img src={ require('../../assets/loading.gif') } alt="loading"/>
                </div>
            )
        }
        return (
            <container className='App'>
                <h3 className="table-title">NCAA Games</h3>
                <table className="table-daily-games">
                    <caption>College Basketball - Game Lines</caption>
                    <thead>
                        <tr>
                            <th className="th-time">Time</th>
                            <th>Team ID</th>
                            <th>Team</th>
                            <th>Spread</th>
                            <th>Total</th>
                            <th>M Line</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mappedArray}
                    </tbody>
                </table> 
            </container>
        )

    }
}
export default CbbBets;