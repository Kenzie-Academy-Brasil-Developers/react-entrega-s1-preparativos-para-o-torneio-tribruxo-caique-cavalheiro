import "./style.css";

function PlayerCard({ player }) {
  let borda = "";
  if (player.house === "Gryffindor") borda = "red";
  if (player.house === "Slytherin") borda = "green";
  if (player.house === "Hufflepuff") borda = "blue";
  if (player.house === "Ravenclaw") borda = "yellow";
  return (
    <figure className={borda}>
      <p>Nome: {player.name}</p>
      <p>Casa: {player.house}</p>
      <p>Especie: {player.species}</p>
      <img className="figure_image" src={player.image} alt={player.name}></img>
    </figure>
  );
}

export default PlayerCard;
