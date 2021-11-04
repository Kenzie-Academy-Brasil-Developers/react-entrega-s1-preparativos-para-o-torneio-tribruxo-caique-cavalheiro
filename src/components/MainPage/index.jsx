import "./style.css";

function MainPage({ setStatus }) {
  const randomNumber = Math.floor(Math.random() * 10000);
  return (
    <div className="main">
      <h1 className="header">Bem vindo ao Torneio Tribruxo</h1>
      <div>
        <h2>Torneio Tribruxo n.º{randomNumber}</h2>
        <br />
        <p className="header_p">
          Por diversos anos de história vários bruxos vem participando do maior
          torneio bruxo, desafiando seus adversários e eles mesmos com o
          objetivo de conquistar a{" "}
          <span className="contrast">Taça Tribruxo!</span>
        </p>
        <img className="img_taca" src="taca2.png" alt="taça-tribruxo"></img>
      </div>
      <button className="button_result" onClick={() => setStatus(false)}>
        Resultado do Torneio
      </button>
    </div>
  );
}

export default MainPage;
