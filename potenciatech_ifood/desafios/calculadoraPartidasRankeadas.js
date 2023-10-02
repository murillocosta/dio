const calculaRank = (vitorias, derrotas) => {
  let rank = "Ferro";
  const saldo = vitorias - derrotas;
  if (saldo > 100) {
    rank = "Imortal";
  } else if (saldo > 90) {
    rank = "Lendário";
  } else if (saldo > 80) {
    rank = "Diamante";
  } else if (saldo > 50) {
    rank = "Ouro";
  } else if (saldo > 20) {
    rank = "Prata";
  } else if (saldo > 10) {
    rank = "Bronze";
  }
  return {
    saldo,
    rank,
  };
};

const displayRank = (player) => {
  const playerRank = calculaRank(player.vitorias, player.derrotas);

  return `O jodagor tem o saldo de ${playerRank.saldo} partidas e está no rank ${playerRank.rank}.`;
};

const player = {
  nome: "Feija1",
  vitorias: 420,
  derrotas: 334,
};

console.log(displayRank(player));
