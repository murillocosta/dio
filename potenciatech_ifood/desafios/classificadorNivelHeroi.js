const mirana = {
  nome: "Mirana",
  xp: 10600,
};

const tidehunter = {
  nome: "Tidehunter",
  xp: 5430,
};

const meepo = {
  nome: "Meepo",
  xp: 430,
};

const sandking = {
  nome: "Sandking",
  xp: 7430,
};

const classificaNivel = (xp) => {
  let nivel = "Ferro";
  if (xp > 10000) {
    nivel = "Radiante";
  } else if (xp > 9000) {
    nivel = "Imortal";
  } else if (xp > 8000) {
    nivel = "Ascendente";
  } else if (xp > 7000) {
    nivel = "Platina";
  } else if (xp > 5000) {
    nivel = "Ouro";
  } else if (xp > 3000) {
    nivel = "Prata";
  } else if (xp > 1000) {
    nivel = "Bronze";
  }
  return nivel;
};

const mostraInfoHeroi = (heroi) => {
  return `O Herói de nome ${heroi.nome} está no nível de ${classificaNivel(
    heroi.xp
  )}.`;
};

console.log(mostraInfoHeroi(mirana));
console.log(mostraInfoHeroi(tidehunter));
console.log(mostraInfoHeroi(meepo));
console.log(mostraInfoHeroi(sandking));
