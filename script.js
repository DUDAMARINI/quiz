const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");



const perguntas = [
    {
        enunciado: "Você vai se casar com o amor da sua vida, e você, noiva, precisa escolher o seu look! Qual seu vestido dos sonhos? ",
        alternativas: [
            {
                texto: " Vestido sereia",
                afirmacao: "Você irá casar com o vestido sereia,"
            },
            {
                texto: "Vestido princesa",
                afirmacao: "Você irá casar com o vestido princesa, "
            }
        ]
    },
    {
        enunciado: "Seu cabelo irá ser solto ou preso?",
        alternativas: [
            {
                texto: "Cabelo solto",
                afirmacao: "cabelo solto,"
            },
            {
                texto: "Cabelo preso",
                afirmacao: "cabelo preso, "
            }
        ]
    },
    {
        enunciado: "Maquiagem leve ou pesada?",
        alternativas: [
            {
                texto: "Maquiagem leve ",
                afirmacao: " e maquiagem leve "
            },
            {
                texto: "Maquiagem pesada",
                afirmacao: " e maquiagem pesada."
            }
        ]
    },

    
    let atual=0;
    let perguntaAtual;
    
    function mostraPergunta() {
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
        mostraAlternativas();
    }
    function mostraAlternativas() {
        for (const alternativa of perguntaAtual.alternativas) {
          const botaoAlternativas = document.createElement("button");
          botaoAlternativas.textContent = alternativa;
          caixaAlternativas.appendChild(botaoAlternativas);
        }
      }
    mostraPergunta();