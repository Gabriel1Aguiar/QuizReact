import React, { useState, useEffect } from "react";

const Quiz = () => {
  const [respostas, setRespostas] = useState([]);
  const [respostasCertas, setRespostasCertas] = useState(0);
  const [perguntas, setPerguntas] = useState([]);
  const url = "https://api-quiz-sigma.vercel.app/perguntas"

  useEffect(() => {
    async function fetchData(){
      const response = await fetch(url);
      const data = await response.json()

      setPerguntas(data)
    }
    fetchData();
  }, []);

  const conferirResposta = (perguntaId, resposta) => {
    if (respostas.some((item) => item.perguntaId === perguntaId)) {
      alert("Você já respondeu essa pergunta");
      return;
    }

    const pergunta = perguntas.find((item) => item.id === perguntaId);
    const respostaRecebida = resposta;

    setRespostas([...respostas, { perguntaId, respostaRecebida }]);

    if (respostaRecebida === pergunta.respostaCorreta) {
      console.log("Acertou");
      setRespostasCertas(respostasCertas + 1);
    } else {
      console.log("Errou");
    }
  };

  const reiniciarQuiz = () => {
    setRespostas([]); 
    setRespostasCertas(0); 
  };

  const finalizarQuiz = () => {
    alert(`Respostas Corretas: ${respostasCertas}/${perguntas.length}`);
    setRespostas([])
  };

  return (
    <div>
      <ul className="quest-respondidas">
        {respostas.map((item, index) => (
          <li key={index}>{`Questão ${item.perguntaId}: Alternativa ${item.respostaRecebida}`}</li>
        ))}
      </ul>

      {perguntas.map((pergunta) => (
        <div key={pergunta.id} id={`q${pergunta.id}`} className="question">
          <h3>{pergunta.pergunta}</h3>
          <ul>
            {Object.entries(pergunta.alternativas).map(([alternativa, texto]) => (
              <li key={alternativa}>
                {`${alternativa}. ${texto}`}
                <button onClick={() => conferirResposta(pergunta.id, alternativa)}>Escolher</button>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div id="bt-fim" className="final-button">
        <button onClick={() => reiniciarQuiz()}>Reiniciar Quiz</button>
        <button onClick={() => finalizarQuiz()}>Finalizar Quiz</button>
      </div>
    </div>
  );
};

export default Quiz;