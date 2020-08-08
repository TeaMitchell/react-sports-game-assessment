import React from 'react';
import './App.css';
import Game from './components/game/Game';



function App(props) {
  const panthers = {
      name: "Strangerville Panthers",
      logoSrc: "./assets/images/Pantherdunking.jpg"
  }

  const eagles = {
      name: "Windenburg Eagles",
      logoSrc: "./assets/images/eagle.jpg"
  }

  const bears = {
    name: "Brindleton Bay Bears",
    logoSrc: "./assets/images/Bear.jpg"
}

const elephants = {
    name: "Newcrest Elephants",
    logoSrc: "./assets/images/elephant.jpg"
}
  return (
      <div className="App">
          <Game
              venue="Union 525 Gem"
              homeTeam={panthers}
              visitingTeam={eagles}
          />

          <Game
              venue="Sheridan Arena"
              homeTeam={bears}
              visitingTeam={elephants}
          />
      </div>
  )
}

export default App;
