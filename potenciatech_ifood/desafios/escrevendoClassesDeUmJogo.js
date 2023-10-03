class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar = () => {
    let ataque = "";
    switch (this.tipo) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
    }

    console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}.`);
  };
}

const sven = new Heroi("Sven", 33, "guerreiro");
sven.atacar();

const ezalor = new Heroi("Ezalor", 87, "mago");
ezalor.atacar();
