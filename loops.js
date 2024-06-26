console.log("Trabalhando com condicionais");


const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

console.log("Destinos possíveis: ", listaDeDestinos);

const idadeCliente = 15;
const estaAcompanhado = true;
let passagemComprada = false;
const destino = "São Paulo";

const podeComprar = idadeCliente >= 18 || estaAcompanhado == true;
let contador = 0;
let destinoExiste = false;

while(contador < 3) {
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        console.log("Destino existe: ", destinoExiste);
        break;
    } 
    contador += 1;
}

if (podeComprar && destinoExiste) {
    console.log("Boa Viagem!");
} else {
    console.log("Desculpe, tivemos um erro.");
}

for(let cont = 0; cont < 3; cont++) { // declaração de variável -> condição -> execução.
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
    } 
}