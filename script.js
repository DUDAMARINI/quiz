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
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = " Um ano depois...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();