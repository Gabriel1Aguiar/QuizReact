import React, { useState } from "react";

const Quiz = () => {

    const [respostas, setRespostas] = useState([])
    const [botaoClicado1, setBotaoClicado1] = useState(false)
    const [botaoClicado2, setBotaoClicado2] = useState(false)
    const [botaoClicado3, setBotaoClicado3] = useState(false)
    const [respostasCertas, setRespostasCertas] = useState(0)

    const resposta1 = 'B'
    const resposta2 = 'A'
    const resposta3 = 'D'    
    
    const conferirResposta1 = (x) => {
        const respostaRecebida = x;
        
        if(botaoClicado1 === false){
            setRespostas([...respostas, { pergunta: 'Questão 1', resposta: respostaRecebida }])
            if(respostaRecebida === resposta1){
                console.log('Acertou');
                setRespostasCertas(respostasCertas + 1)
            }else{
                console.log('Errou')
            }
            setBotaoClicado1(true)
            
        }else{
            alert('Você já respondeu essa pergunta')
        }
                
    }

    const conferirResposta2 = (x) => {
        const respostaRecebida = x;
        if(botaoClicado2 === false){
            setRespostas([...respostas, { pergunta: 'Questão 2', resposta: respostaRecebida }])
            if(respostaRecebida === resposta2){
                console.log('Acertou');
                setRespostasCertas(respostasCertas + 1)
            }else{
                console.log('Errou')
            }
            setBotaoClicado2(true)
        }else{
            alert('Você já respondeu essa pergunta')
        }
        
    }

    const conferirResposta3 = (x) => {
        const respostaRecebida = x;
        if(botaoClicado3 === false){
            setRespostas([...respostas, { pergunta: 'Questão 3', resposta: respostaRecebida }])
            if(respostaRecebida === resposta3){
                console.log('Acertou');
                setRespostasCertas(respostasCertas + 1)
            }else{
                console.log('Errou')
            }
            setBotaoClicado3(true)
        }else{
            alert('Você já respondeu essa pergunta')
        }
        
    }

    const finalizarQuiz = () => {
        alert(`Respostas Corretas: ${respostasCertas}/3`)
    }

    return(
        <> 
            <ul id="questRespondidas">
                {respostas.map((item, index) => (
                <li key={index}>{`${item.pergunta}: Alternativa ${item.resposta}`}</li>
                ))}
            </ul>              
            <div id="q1">
                <h3>#1 - O que é Front-end?</h3>
                <ul>
                    <li>
                        A. Parte de um sistema que é oculta para o usuário. <button onClick={() => conferirResposta1('A')}>Escolher</button>
                    </li>
                    <li>
                        B. Parte de um sistema é visível e interativa ao usuário. <button onClick={() => conferirResposta1('B')}>Escolher</button>
                    </li>
                    <li>
                        C. Parte lógica que recebe as regras de negócio. <button onClick={() => conferirResposta1('C')}>Escolher</button>
                    </li>
                    <li>
                        D. Nenhuma das alternativas anteriores. <button onClick={() => conferirResposta1('D')}>Escolher</button>
                    </li>
                </ul>
            </div>
            <div id="q2">
                <h3>#2 - O que é React JS?</h3>
                <ul>
                    <li>
                        A. Uma poderosa biblioteca JavaScript<button onClick={() => conferirResposta2('A')}>Escolher</button>
                    </li>
                    <li>
                        B. Uma linguagem de Programação.<button onClick={() => conferirResposta2('B')}>Escolher</button>
                    </li>
                    <li>
                        C. Um servidor de Cloud. <button onClick={() => conferirResposta2('C')}>Escolher</button>
                    </li>
                    <li>
                        D. Todas as respostas anteriores. <button onClick={() => conferirResposta2('D')}>Escolher</button>
                    </li>
                </ul>
            </div>
            <div id="q3">
                <h3>#3 - Quais são as principais tecnologias do mundo Front-end?</h3>
                <ul>
                    <li>
                        A. Java, golang e python. <button onClick={() => conferirResposta3('A')}>Escolher</button>
                    </li>
                    <li>
                        B. AWS, Google Cloud e Azure. <button onClick={() => conferirResposta3('B')}>Escolher</button>
                    </li>
                    <li>
                        C. Kotlin, HTML e CSS. <button onClick={() => conferirResposta3('C')}>Escolher</button>
                    </li>
                    <li>
                        D. HTML, CSS e JavaScript <button onClick={() => conferirResposta3('D')}>Escolher</button>
                    </li>
                </ul>
            </div>
            <div id="bt-fim">
                <button onClick={() => finalizarQuiz()}>Finalizar Quiz</button>
            </div>
            
        </>
    )
    
}

export default Quiz;
