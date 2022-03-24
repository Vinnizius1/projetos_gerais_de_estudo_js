const cliente = {
  nome: "Vinicius Matos",
  cpf: "011.111.111.11",
  nascimento: "11/11/2011",
  telefone: "999999955",
  endereco: {
    rua: "Avenida JS",
    cidade: "Typora",
    estado: "GO",
    pais: "Brasil",
  },
};

const log = (dado) => console.log(dado);

// log(cliente.nome);
// log(cliente.cpf);
// log(cliente.endereco.pais);

/* Desestruturando */
const { nome, cpf, endereco } = cliente;
// log(nome);
// log(cpf);
// log(endereco);
// log(endereco.rua)

function clienteDesestruturado({ nome, cpf, endereco: { rua } }) {
  log(nome);
  log(cpf);
  log(endereco);
  log("Nome da rua: " + rua);
}

clienteDesestruturado(cliente);
