import { useState } from "react";

const Quiz = () => {
  const [respostas, setRespostas] = useState([]);
  const [respostasCertas, setRespostasCertas] = useState(0);

  const perguntas = [
    {
      pergunta: "#1 - O que é Front-end?",
      alternativas: {
        A: "Parte de um sistema que é oculta para o usuário.",
        B: "Parte de um sistema é visível e interativa ao usuário.",
        C: "Parte lógica que recebe as regras de negócio.",
        D: "Nenhuma das alternativas anteriores."
      },
      respostaCorreta: "B"
    },
    {
      pergunta: "#2 - O que é React JS?",
      alternativas: {
        A: "Uma poderosa biblioteca JavaScript.",
        B: "Uma linguagem de Programação.",
        C: "Um servidor de Cloud.",
        D: "Todas as respostas anteriores."
      },
      respostaCorreta: "A"
    },
    {
      pergunta: "#3 - Quais são as principais tecnologias do mundo Front-end?",
      alternativas: {
        A: "Java, golang e python.",
        B: "AWS, Google Cloud e Azure.",
        C: "Kotlin, HTML e CSS.",
        D: "HTML, CSS e JavaScript"
      },
      respostaCorreta: "D"
    },
    {
      pergunta: "#4 - Qual tag HTML é usada para criar uma lista ordenada?",
      alternativas: {
        A: "<ul>",
        B: "<ol> ",
        C: "<li>",
        D: " <dl>"
      },
      respostaCorreta: "C"
    }
  ];

  const conferirResposta = (perguntaIndex, resposta) => {
    if (respostas.includes(perguntaIndex)) {
      alert('Você já respondeu essa pergunta');
      return;
    }

    const pergunta = perguntas[perguntaIndex];
    const respostaRecebida = resposta;

    setRespostas([...respostas, {perguntaIndex, respostaRecebida}]);

    if (respostaRecebida === pergunta.respostaCorreta) {
      console.log('Acertou');
      setRespostasCertas(respostasCertas + 1);
    } else {
      console.log('Errou');
    }
  };

  const reiniciarQuiz = () => {
    setRespostas([]); // Reseta as respostas
    setRespostasCertas(0); // Reseta as respostas corretas
  };

  const finalizarQuiz = () => {
    alert(`Respostas Corretas: ${respostasCertas}/4`);
  };

  return (
    <div>
      <ul className="quest-respondidas">
        {respostas.map((item, index) => (
          <li key={index}>{`Questão ${item.perguntaIndex + 1}: Alternativa ${item.respostaRecebida}`}</li>
        ))}
      </ul>

      {perguntas.map((pergunta, index) => (
        <div key={index} id={`q${index + 1}`} className="question">
          <h3>{pergunta.pergunta}</h3>
          <ul>
            {Object.entries(pergunta.alternativas).map(([alternativa, texto]) => (
              <li key={alternativa}>
                {`${alternativa}. ${texto}`}
                <button onClick={() => conferirResposta(index, alternativa)}>Escolher</button>
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
