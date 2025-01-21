<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Jogo de Caça-Palavras - Tecnologias Web</title>
</head>
<body>

  <div style="font-family: Arial, sans-serif; margin: 20px;">
    <h1 style="text-align: center; color: #4CAF50;">Jogo de Caça-Palavras - Tecnologias Web</h1>
    
    <div style="margin-bottom: 20px;">
      <p>
        Este é um <strong>jogo de caça-palavras simples</strong>, onde o objetivo é <strong>encontrar palavras relacionadas a tecnologias web</strong> em uma grade de letras. O jogo é jogado no <strong>terminal</strong>, e o jogador precisa digitar as palavras que encontra na grade para completar o desafio.
      </p>
    </div>

    <h2>Objetivo</h2>
    <div style="margin-bottom: 20px;">
      <p>
        Encontrar todas as palavras relacionadas ao desenvolvimento web na grade de 6x6. As palavras podem estar dispostas de forma <strong>horizontal</strong>, <strong>vertical</strong> ou <strong>diagonal</strong>, mas estão sempre visíveis na matriz. O jogo termina quando <strong>todas as palavras forem encontradas</strong> ou quando o jogador digitar <strong>"SAIR"</strong> para encerrar.
      </p>
    </div>

    <h2>Tecnologias Utilizadas</h2>
    <div style="margin-bottom: 20px;">
      <ul>
        <li><strong>JavaScript</strong>: Para a lógica do jogo.</li>
        <li><strong>Node.js</strong>: Para executar o jogo no terminal.</li>
        <li><strong>readline-sync</strong>: Biblioteca para capturar a entrada do usuário no terminal.</li>
      </ul>
    </div>

    <h2>Como Jogar</h2>
    <div style="margin-bottom: 20px;">
      <ol>
        <li><strong>Clone o repositório</strong> para sua máquina local:
          <pre><code>git clone https://github.com/seu-usuario/nome-do-repositorio.git</code></pre>
        </li>
        <li><strong>Instale as dependências</strong>: No diretório do projeto, execute:
          <pre><code>npm install</code></pre>
        </li>
        <li><strong>Inicie o jogo</strong>: Para começar a jogar, execute o seguinte comando:
          <pre><code>node index.js</code></pre>
        </li>
      </ol>
    </div>

    <h2>Estrutura do Código</h2>
    <div style="margin-bottom: 20px;">
      <p>O código é estruturado da seguinte forma:</p>
      <ul>
        <li><strong>index.js</strong>: Contém a lógica do jogo e a interação com o usuário.
          <ul>
            <li><strong>Função `printBoard()`</strong>: Exibe a grade de palavras no terminal.</li>
            <li><strong>Função `checkWord()`</strong>: Verifica se a palavra digitada está correta e se ainda não foi encontrada.</li>
            <li><strong>Função `startGame()`</strong>: Inicia o jogo e controla o fluxo do jogo, incluindo a captura de palavras e verificação do progresso.</li>
          </ul>
        </li>
      </ul>
    </div>

    <h2>Como Funciona</h2>
    <div style="margin-bottom: 20px;">
      <p>
        O jogo começa exibindo uma <strong>grade de 6x6</strong> com letras aleatórias, incluindo as palavras do jogo de forma discreta. O jogador digita palavras, e o sistema verifica se a palavra digitada está na lista de palavras do jogo. A cada palavra encontrada, o sistema informa quantas palavras ainda restam para serem encontradas.
      </p>
    </div>

    <h2>Exemplo de Jogo</h2>
    <div style="margin-bottom: 20px;">
      <h3>Grade do Jogo:</h3>
      <pre>
H T M T N P
C Ç Y C O Y
J A V A D T
H O S A E H
D U V E R O
W C S S Y N
      </pre>
    </div>

    <h2>Contribuindo</h2>
    <div style="margin-bottom: 20px;">
      <ol>
        <li><strong>Fork o repositório</strong>.</li>
        <li><strong>Crie uma branch</strong> para a sua feature (<code>git checkout -b feature-nome-da-feature</code>).</li>
        <li><strong>Commit</strong> suas alterações (<code>git commit -am 'Adicionando nova feature'</code>).</li>
        <li><strong>Push</strong> para a branch (<code>git push origin feature-nome-da-feature</code>).</li>
        <li>Abra um <strong>Pull Request</strong>.</li>
      </ol>
    </div>

    <h2>Licença</h2>
    <div style="margin-bottom: 20px;">
      <p>Este projeto está licenciado sob a licença <strong>MIT</strong> - veja o arquivo <a href="LICENSE">LICENSE</a> para mais detalhes.</p>
    </div>

    <h2>Contribuidores</h2>
    <div style="margin-bottom: 20px;">
      <p><strong>Maria Gabriella</strong>: Desenvolvedora e responsável pela lógica do jogo.</p>
      <p><strong>Gabriel Ferreira</strong>: Desenvolvedor e responsável pela implementação das funcionalidades no terminal.</p>
    </div>

  </div>

</body>
</html>

