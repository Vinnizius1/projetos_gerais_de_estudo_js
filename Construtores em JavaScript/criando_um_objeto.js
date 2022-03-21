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
let a2 = criaProduto("Calça", 300);

// console.log(
//   "O nome do produto a1 é",
//   a1.nome,
//   "e teve um desconto de",
//   a1.calculaDesconto(),
//   "reais."
// );
// console.log(a2.calculaDesconto());

//O JavaScript JÁ TEM uma sintaxe para definir a estrutura commum entre os objetos
function Produto(paramNome, paramPreco) {
  this.nome = paramNome;
  this.preco = paramPreco;
  this.calculaDesconto = function () {
    console.log("O valor do desconto da blusa é de", this.preco * 0.1, "reais.");
  };
}

// let b1 = new Produto("Blusa", 120);
// b1.calculaDesconto();

//Observe que:
// 1º não precisamos retornar o Objeto
// 2º as propriedades são definidas com o this
// 3º é usado = ao invés de : para atribuir
// 4º as linhas são separadas por ;
// 5º ao criar produtos usamos o new

//A sintaxe anterior é a maneira correta de definir a estrutura para seus objetos e é chamada de construtor.

//Na nova versão da linguagem JavaScript, o EcmaScript 2015, há uma outra maneira de criar um construtor (e a classe):
class Vestuario {
    constructor(paramNome, paramPreco) {
        this.nome = paramNome;
        this.preco = paramPreco;
    }
    calculaDesconto() {
        console.log(this.preco * 0.1);
    }
}

let c1 = new Vestuario("Blusa", 120);
c1.calculaDesconto();

//Observe que:
// 1º temos uma class, e não mais uma function
// 2º definimos atributos dentro de constructor
// 3º o método calculaDesconto fica à parte, sem o this


