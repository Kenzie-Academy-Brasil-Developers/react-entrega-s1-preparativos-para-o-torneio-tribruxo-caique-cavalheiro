import "./App.css";
import { useState, useEffect } from "react";
import MainPage from "./components/MainPage";
import GameResult from "./components/GameResult";

function App() {
  const [allPersons, setAllPersons] = useState([]);
  const [players, setPlayers] = useState([]);
  const [status, setStatus] = useState(true);
  const [randomNumber, setRandomNumber] = useState();

  useEffect(() => {
    fetch(`https://hp-api.herokuapp.com/api/characters/students?page`)
      .then((response) => response.json())
      .then((response) => {
        setAllPersons(response);
        setRandomNumber(Math.floor(Math.random() * 10000));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      {status ? (
        <MainPage
          randomNumber={randomNumber}
          setStatus={setStatus}
          setPlayers={setPlayers}
          allPersons={allPersons}
        />
      ) : (
        <GameResult setStatus={setStatus} players={players} />
      )}
    </div>
  );
}

export default App;
