import PlayerCard from "../PlayerCard";
import { useState } from "react";
import "./style.css";

function GameResult({ players, setStatus }) {
  const [classWinner, setClassWinner] = useState("hidden");
  const [contentClass, setContentClass] = useState("");

  const selector = Math.floor(Math.random() * 2);
  const winner = players[selector];

  function buttonResult() {
    setClassWinner("winner");
    setContentClass("hidden");
  }

  return (
    <div>
      <h1 className="header">Participantes do Torneio Tribruxo</h1>
      <div className={contentClass}>
        <div className="content_flex">
          <PlayerCard player={players[0]} />
          <PlayerCard player={players[1]} />
          <PlayerCard player={players[2]} />
        </div>
        <p className="text_preButton">
          Vamos descobrir quem será o bruxo vencedor do torneio!
        </p>
        <button className="button_result2" onClick={() => buttonResult()}>
          Iniciar os jogos
        </button>
      </div>
      <div className={classWinner}>
        <div className="content_winner">
          <p>O vencedor(a) do torneio tribruxo foi: {winner.name}</p>
          <img
            className="winner_image"
            src={winner.image}
            alt={winner.name}
          ></img>
        </div>
        <button className="button_result2" onClick={() => setStatus(true)}>
          Voltar ao menu principal
        </button>
      </div>
    </div>
  );
}

export default GameResult;
