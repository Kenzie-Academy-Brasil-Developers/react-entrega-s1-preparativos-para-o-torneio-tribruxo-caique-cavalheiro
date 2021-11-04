import PlayerCard from "../PlayerCard";
import "./style.css";

function GameResult({ allPersons, setStatus }) {
  const personsWithImage = allPersons.filter((person) => {
    if (person.image !== "") {
      return true;
    }
    return null;
  });
  let player1 = 0;
  let player2 = 0;
  let player3 = 0;
  let loop = true;
  while (loop) {
    player1 = Math.floor(Math.random() * personsWithImage.length);
    player2 = Math.floor(Math.random() * personsWithImage.length);
    player3 = Math.floor(Math.random() * personsWithImage.length);
    if (player1 !== player2 && player1 !== player3 && player2 !== player3) {
      if (
        personsWithImage[player1].house !== personsWithImage[player2].house &&
        personsWithImage[player1].house !== personsWithImage[player3].house &&
        personsWithImage[player2].house !== personsWithImage[player3].house
      ) {
        loop = false;
      }
    }
  }
  return (
    <div>
      <h1 className="header">Participantes do Torneio Tribruxo</h1>
      <div className="content_flex">
        <PlayerCard player={personsWithImage[player1]} />
        <PlayerCard player={personsWithImage[player2]} />
        <PlayerCard player={personsWithImage[player3]} />
      </div>
      <button className="button_result" onClick={() => setStatus(true)}>
        Retornar a tela principal
      </button>
    </div>
  );
}

export default GameResult;
