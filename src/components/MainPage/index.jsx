import "./style.css";

function MainPage({ setStatus, setPlayers, allPersons }) {
  const randomNumber = Math.floor(Math.random() * 10000);

  function selectPlayers() {
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
          setPlayers([
            personsWithImage[player1],
            personsWithImage[player2],
            personsWithImage[player3],
          ]);
          loop = false;
        }
      }
    }
  }

  return (
    <div className="main">
      <h1 className="header">Bem vindo ao Torneio Tribruxo</h1>
      <div className="header_content_align">
        <h2 className="header_h2">Torneio Tribruxo n.º{randomNumber}</h2>
        <p className="header_p">
          Por diversos anos de história vários bruxos vem participando do maior
          torneio bruxo, desafiando seus adversários e eles mesmos com o
          objetivo de conquistar a{" "}
          <span className="contrast">Taça Tribruxo!</span>
        </p>
        <img className="img_taca" src="taca2.png" alt="taça-tribruxo"></img>
      </div>
      <button
        className="button_result"
        onClick={() => {
          setStatus(false);
          selectPlayers();
        }}
      >
        Participantes do Torneio
      </button>
    </div>
  );
}

export default MainPage;
