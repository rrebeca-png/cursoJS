console.log("Trabalhando com listas");

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
listaDeDestinos.push(`Curitiba`); // adiciona novos elementos em uma lista
listaDeDestinos.splice(2,1);

console.log("Destinos disponíveis: ", listaDeDestinos);
console.log(listaDeDestinos[1]);

