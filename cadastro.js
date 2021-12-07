let dataAtual = "07/12/2021"
let dataEvento = "10/12/2021"

if (dataAtual < dataEvento) {

    console.log("Prossiga com o cadastro!")
} else {
    console.log("Data inválida.")
}

let idade = 18
if (idade < 18) {
    console.log("Entrada não permitida para menores de 18 anos.")
} else {
    console.log("Prossiga com o cadastro!")
}

var listaDeParticipantes = ["Participante 1", "Participante 2", "Participante 3", "Participante 4", "Participante 5"]

if (listaDeParticipantes.length < 100) {
    console.log("Cadastro feito!")
} else {
    console.log("Limite de 100 participantes atingido. Não pudemos completar o seu cadastro.")
}