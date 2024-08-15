const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: " Você colocaria energia solar na sua casa? ",
        alternativas: [
            {
                texto: " sim ",
                afirmacao: "você é uma pessoa que se preocupa com o meio ambiente",
            },
            {
                texto: "Não",
                afirmacao: " você é uma pessoa resistente a mudança ",
            }
        ]
    },
    {
        enunciado: "Você  apoia a ideia de ensinar sustentabilidades as crianças",
        alternativas: [
            {
                texto: " sim.",
                afirmacao: "que se importa com práticas saudaveis",
            },
            {
                texto: "não.",
                afirmacao: "talvez não sabia a importancia e como pode mudar na nossa vida",
            }
        ]
    },
    {
        enunciado: "você acha dificil ser sustentavel",
        alternativas: [
            {
                texto: "sim.",
                afirmacao: "que nem sempre consiga fazer escolhas sustentavel numa sociedade  onde o consumo sem fim é incentivado",
            },
            {
                texto: " não",
                afirmacao: " é uma pessoa comn conhecimento ",
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

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
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
    caixaPerguntas.textContent = "Seu perfil...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();