const readline = require('readline-sync'); // Para capturar entrada do usuário

// Lista de palavras que o jogador deve encontrar
const palavras = ["HTML", "CSS", "REACT", "PYTHON", "NODE", "JAVA"];
let encontradas = []; // Lista para armazenar as palavras já encontradas

// Definir a grade manualmente com uma matriz 6x6, incluindo as palavras de forma discreta
const grade = [
  ["H", "T", "M", "L", "N", "P"],
  ["C", "T", "Y", "T", "O", "Y"],
  ["R", "W", "V", "C", "D", "T"],
  ["J", "A", "V", "A", "E", "H"],
  ["D", "U", "V", "E", "R", "O"],
  ["C", "S", "S", "R", "Y", "N"]
];

// Função para exibir a grade no console
function printBoard() {
  console.log('Grade do Jogo:');
  grade.forEach(linha => {
    console.log(linha.join(' ')); // Exibe a linha com as letras separadas por espaço
  });
}

// Função para verificar se a palavra digitada é válida
function checkWord(palavra) {
  const palavraUpper = palavra.toUpperCase().trim(); // Converte para maiúsculas e remove espaços extras

  // Se o jogador digitar "sair", o jogo é encerrado
  if (palavraUpper === "SAIR") {
    console.log("Jogo encerrado!");
    return true;  // Retorna true para sinalizar que o jogo foi encerrado
  }

  // Verifica se a palavra digitada está na lista de palavras e se ainda não foi encontrada
  if (palavras.includes(palavraUpper) && !encontradas.includes(palavraUpper)) {
    encontradas.push(palavraUpper); // Adiciona a palavra encontrada à lista
    console.log(`Você encontrou: ${palavraUpper}. Quantidade de palavras restantes: ${palavras.filter(p => !encontradas.includes(p)).length}`);
  } else {
    console.log("Palavra inválida ou já encontrada.");
  }

  // Se o jogador encontrou todas as palavras
  if (encontradas.length === palavras.length) {
    console.log("Você encontrou todas as palavras! Parabéns!");
    return true; // Retorna true para sinalizar que o jogo foi concluído
  }

  return false;  // Retorna false se o jogo ainda não terminou
}

// Função para iniciar o jogo
function startGame() {
  printBoard(); // Exibe a grade no console
  console.log("\nHora de encontrar as palavras! Tema: Tecnologias Web");

  // Loop do jogo
  while (encontradas.length < palavras.length) {
    let palavra = readline.question('\nDigite uma palavra (ou "sair" para encerrar): '); // Captura a palavra digitada

    // Verifica a palavra e encerra o jogo se necessário
    if (checkWord(palavra)) {
      break; // Encerra o loop se o jogo for encerrado ou concluído
    }
  }
}

// Inicia o jogo
startGame();
