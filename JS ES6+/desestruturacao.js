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

// log(cliente.nome); /* Vinicius Matos */
// log(cliente.cpf); /* 011.111.111.11 */
// log(cliente.endereco.pais); /* Brasil */

/* 
Agora vamos desestruturar o objeto "cliente"
*/
const { nome, cpf, endereco } = cliente;
// log(nome); /* Vinicius Matos */
// log(cpf); /* 011.111.111.11 */
// log(endereco); /* { rua: 'Avenida JS', cidade: 'Typora', estado: 'GO', pais: 'Brasil' } */
// log(endereco.rua); /* Avenida JS */

function clienteDesestruturado({ nome, cpf, endereco: { rua } }) {
  log(nome); /* Vinicius Matos */
  log(cpf); /* 011.111.111.11 */
  log(endereco); /* { rua: 'Avenida JS', cidade: 'Typora', estado: 'GO', pais: 'Brasil' } */
  log("Nome da rua: " + rua); /* Nome da rua: Avenida JS */
}

clienteDesestruturado(cliente);
