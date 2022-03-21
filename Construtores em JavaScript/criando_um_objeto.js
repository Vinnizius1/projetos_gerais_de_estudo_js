// Cria um objeto
let produto1 = {
  nome: "Blusa",
  preco: 120,
  calculaDesconto() {
    //10% de desconto
    return this.preco * 0.1;
  },
};

var produto2 = {
  nome: "Calça",
  preco: 300,
  //Forma diferente de definir o método calculaDesconto()
  calculaDesconto: function () {
    //10% de desconto
    return this.preco * 0.1;
  },
};

console.log(produto1.calculaDesconto());
console.log(produto2.calculaDesconto());
