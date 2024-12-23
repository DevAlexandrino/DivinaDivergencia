import { personagem } from "./personagem.js";

function atualizarFicha(){
    let raca = document.getElementById("characterInfo-raca")
    if (raca){
        raca.innerHTML = personagem.dados.raca
    } else {
        console.log("Erro ao atualizar raça")
    }
}    

window.atualizarFicha = atualizarFicha