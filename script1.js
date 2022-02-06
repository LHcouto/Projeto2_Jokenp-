var prompt = require("prompt-sync")();
//declarando variaveis
let nrodadas;
let escolhas = ["pedra", "papel", "tesoura"];
let escolhaJG = [];
let leitor = [];
let rodadas = 0;
let controle = 0;
let playagain = "nao";
let pontosJG = 0;
let pontosPC = 0;

do {
  do {
    nrodadas = prompt("Digite o numero de rodadas: ");
    // Para passar os dígitos para o array leitor
    for (let x = 0; x < nrodadas; x++) {
      leitor[x] = nrodadas.charAt(x);
    }

    //para verificar se alguma letra foi digitada por engano
    for (let x = 0; x < nrodadas; x++) {
      if (leitor[x] + 1 < 0) {
        break;
      } else {
        controle++;
      }
    }
  } while (controle <= 0);

  do {
    controle = 0;

    //validando escolha do jogador
    do {
      escolhaJG = prompt("Digite pedra, papel ou tesoura: ").toLowerCase();
      console.log();
      if (
        escolhaJG == "pedra" ||
        escolhaJG == "papel" ||
        escolhaJG == "tesoura"
      ) {
        controle++;
      } else {
        console.log("escolha invalida");
      }
    } while (controle <= 0);

    let escolhaPC = Math.floor(Math.random() * 3);
    //mostrando escolhas
    console.log(`Rodada Numero:${rodadas + 1}`);
    console.log(
      `Sua escolha foi ${escolhaJG} a escolha do computador foi ${escolhas[escolhaPC]}`
    );
    console.log();

    rodadas++;

    //validações de vitoria
    if (
      (escolhaJG == escolhas[0] && escolhaPC == 2) ||
      (escolhaJG == escolhas[1] && escolhaPC == 0) ||
      (escolhaJG == escolhas[2] && escolhaPC == 1)
    ) {
      console.log("Voce venceu essa rodada!");
      pontosJG++;
    } else if (escolhaJG == escolhas[escolhaPC]) {
      console.log("Empate");
    } else {
      console.log("o Computador venceu essa rodada!");
      pontosPC++;
    }
  } while (rodadas < nrodadas);

  controle = 0;

  if (pontosJG > pontosPC) {
    console.log(
      `pontos jogardor: ${pontosJG}, pontos Computador: ${pontosPC}. O Jogador venceu!`
    );
  } else if (pontosJG === pontosPC) {
    console.log(
      `pontos jogardor: ${pontosJG}, pontos Computador: ${pontosPC}. Empate! `
    );
  } else {
    console.log(
      `pontos jogardor: ${pontosJG}, pontos Computador: ${pontosPC}. O computador venceu `
    );
  }
  rodadas = 0;
  pontosJG = 0;
  pontosPC = 0;
  while (true) {
    playagain = prompt(`Deseja jogar novamente? Responda com "sim" ou "nao": `)
      .toLowerCase()
      .trim();

    if (playagain != "sim" && playagain != "nao") {
      console.log(`Resposta inválida.`);
    } else {
      break;
    }
  }
} while (playagain == "sim");