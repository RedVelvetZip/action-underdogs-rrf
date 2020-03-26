import GetCurrentDate from '../config/utils'

const key = "44f9dca8c64945e6a140887d4ff5279d"
const thedate = GetCurrentDate()
//CBB
export const AreGamesInProgress = "https://api.sportsdata.io/v3/cbb/scores/json/AreAnyGamesInProgress?key=" + key
export const DailyGamesCBB = "https://api.sportsdata.io/v3/cbb/scores/json/GamesByDate/" + thedate + '?key=' + key
