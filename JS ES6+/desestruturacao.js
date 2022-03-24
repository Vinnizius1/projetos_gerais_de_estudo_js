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


/* 
Vamos desestruturar o objeto "cliente"
*/
// const { nome, cpf, endereco } = cliente;
// console.log(nome); /* Vinicius Matos */
// console.log(cpf); /* 011.111.111.11 */
// console.log(endereco); /* { rua: 'Avenida JS', cidade: 'Typora', estado: 'GO', pais: 'Brasil' } */
// console.log(endereco.rua); /* Avenida JS */

function clienteDesestruturado({ nome, cpf, endereco }) {
  console.log(nome); /* Vinicius Matos */
  console.log(cpf); /* 011.111.111.11 */
  console.log(endereco); /* { rua: 'Avenida JS', cidade: 'Typora', estado: 'GO', pais: 'Brasil' } */
  console.log("Nome da rua: " + endereco.rua); /* Nome da rua: Avenida JS */
}

clienteDesestruturado(cliente);
