// eslint-disable-next-line no-unused-vars
import React from "react";
import Quiz from "./components/Quiz";
import "./App.css"; // Importe o arquivo CSS
function App() {
  return (
    <>
      <div id="container">
        <h1>Quiz Front-End</h1>
        <div>
          <p id="questao">Questões Respondidas:</p>
        </div>
      </div>
      <Quiz />

      <footer>
      <div id="footer_copy">
            Copyright- Todos os dirietos reservados
        </div>
      </footer>
    </>
  );
}

export default App;