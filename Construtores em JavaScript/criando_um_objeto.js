/* Step 1 */
// Bóra criar um objeto
let produto1 = {
  nome: "Blusa",
  preco: 120,
  calculaDesconto() {
    //10% de desconto
    return this.preco * 0.1;
  },
};

let produto2 = {
  nome: "Calça",
  preco: 300,
  //Forma diferente de definir o método calculaDesconto() com Object methods
  calculaDesconto: function () {
    //10% de desconto
    return this.preco * 0.1;
  },
};

// console.log(produto1.calculaDesconto());
// console.log(produto2.calculaDesconto());

/* Step 2 */
//Pegaremos a estrutura comum dos produtos e colocaremos numa função criaProduto() para não repetirmos código
function criaProduto(parametroNome, parametroPreco) {
  return {
    nome: parametroNome,
    preco: parametroPreco,
    calculaDesconto() {
      return this.preco * 0.1;
    },
  };
}

let a1 = criaProduto("Blusa", 120);
let a2 = criaProduto("Calça", 300)

console.log("O nome do produto a1 é", a1.nome, "e teve um desconto de", a1.calculaDesconto(), "reais.")
console.log(a2.calculaDesconto())


