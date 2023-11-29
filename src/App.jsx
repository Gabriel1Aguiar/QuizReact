import Quiz from "./components/Quiz";
import styles from "./components/Quiz.module.css"; 

function App() {
  return (
    <>
      <div  className={styles.container}>
        <h1>Quiz Front-End</h1>
        <div>
          <p className={styles.questao}>Questões Respondidas:</p>
        </div>
      </div>
      <Quiz />

      <footer>
         <div className={styles.footer_copy}>
            Copyright- Todos os dirietos reservados
        </div>
      </footer>
    </>
  );
}

export default App;