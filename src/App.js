import "./App.css";
import { useState, useEffect } from "react";
import MainPage from "./components/MainPage";
import GameResult from "./components/GameResult";

function App() {
  const [allPersons, setAllPersons] = useState([]);
  const [status, setStatus] = useState(true);

  useEffect(() => {
    fetch(`http://hp-api.herokuapp.com/api/characters/students?page`)
      .then((response) => response.json())
      .then((response) => setAllPersons(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      {status ? (
        <MainPage setStatus={setStatus} />
      ) : (
        <GameResult allPersons={allPersons} setStatus={setStatus} />
      )}
    </div>
  );
}

export default App;
