console.log("Trabalhando com condicionais");


const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeCliente = 15;
const estaAcompanhado = true;
const passagemComprada = true;

if (idadeCliente >= 18 || estaAcompanhado) { 
    console.log("Boa viagem!");
    listaDeDestinos.splice(2, 1);
    console.log("Destinos disponíveis: ", listaDeDestinos);
} else {
    console.log("Cliente é menor de idade e não pode realizar a compra")
}

console.log("Embarque: \n")
if(idadeCliente >= 18 && passagemComprada) {
    console.log("Boa viagem!")
} else {
    console.log("Cliente não pode embarcar")
}

