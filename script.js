const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Amizade verdadeira são aquelas que duram para sempre?",
        alternativas: [
            {
                texto: "verdadeiro!",
                afirmacao: "pode parecer que amizades duradouras indicam verdadeiras, mais a duração não é o unico fator "
            },
            {
                texto: "falso",
                afirmacao: "nem todas as amizades verdadeiras duram para sempre devido a mudança de vida."
            }
        ]
    },
    {
        enunciado: "Qual da seguintes não é uma caracterisca importante de uma boa amizade?",
        alternativas: [
            {
                texto: "confiança .",
                afirmacao: "essencial para uma boa amizade."
            },
            {
                texto: "competitividade .",
                afirmacao: "prtejudical, pois pode causar rivalidade."
            }
        ]
    },
    {
        enunciado: "amigos sempre devem concordar em tudo?",
        alternativas: [
            {
                texto: "verdadeiro.",
                afirmacao: "idealmente, amigos deviam concordar, mas isso é uma visão limitada."
            },
            {
                texto: "falso.",
                afirmacao: "Discordância são normais e podem fortalecer uma amizade"
            }
        ]
    },
    {
        enunciado: "Qua das seguintes é uma maneira de fortalecer a amizade",
        alternativas: [
            {
                texto: "passar mais tempos juntos ",
                afirmacao: "ajudar a criar laços mais profundos ."
            },
            {
                texto: "compartilhar segredos",
                afirmacao: "também pode fortalecer a amizade mas é apenas uma parte do processo!"
            }
        ]
    },
    {
        enunciado: "amigos verdadeiros sempre se apoiam nos momentos difíceis? ",
        alternativas: [
            {
                texto: "verdadeiro.",
                afirmacao: "o apoio em momentos difíceis é um sinal de amizade verdadeira."
            },
            {
                texto: "falso",
                afirmacao: "embora ideal, pode haver situaçao em que o apoio não é possivel. "
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
    caixaPerguntas.textContent = " texto resultado";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();