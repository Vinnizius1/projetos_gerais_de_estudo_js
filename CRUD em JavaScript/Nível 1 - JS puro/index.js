/* FONTE: https://www.youtube.com/watch?v=5I4W0Mtcfqo&ab_channel=MarioSouto-DevSoutinho */

/* [CRUD] JavaScript Básico */
const miniTwitter = {
  usuarios: [
    {
      username: "Vinicius",
    },
  ],
  posts: [
    {
      id: 1,
      owner: "Vinicius",
      content: "Este é o primeiro tweet",
    },
  ],
};

// CREATE
function criaPost(dados) {
  miniTwitter.posts.push({
    id: miniTwitter.posts.length + 1,
    owner: dados.owner,
    content: dados.content,
  });
}

criaPost({ owner: "Pâmela", content: "Este é o segundo tweet" });
console.log(miniTwitter)
criaPost({ owner: "Chatosvaldo", content: "Este é o terceiro tweet" });

criaPost({ owner: "Rubiatabata", content: "Este é o quarto tweet" });
console.log(miniTwitter)
