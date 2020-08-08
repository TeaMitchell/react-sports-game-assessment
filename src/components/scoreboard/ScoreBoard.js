import React from 'react'

function ScoreBoard(props){
    return(
        <div className="ScoreBoard">
            <div className="teamStats">
                <h3>Home</h3>
                <h3>{props.homeTeamStats.score}</h3>
            </div>

            <h3>ScoreBoard</h3>

            <div className="teamStats">
                <h3>Visiting</h3>
                <h3>{props.visitingTeamStats.score}</h3>
            </div>
        </div>
    )
}

export default ScoreBoard;