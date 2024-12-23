import { personagem } from "./personagem.js";

function atualizarFicha(){
    let raca = document.getElementById("characterInfo-raca");
    if (raca){
        raca.innerHTML = personagem.dados.raca;
    } else {
        console.log("Erro ao atualizar raça");
    }

    let nucleo = document.getElementById("characterInfo-nucleo");
    if (nucleo){
        nucleo.innerHTML = personagem.dados.nucleo;
    } else {
        console.log("Erro ao atualizar núcleo");
    }

    let genetica = document.getElementById("characterInfo-genetica");
    if (genetica){
        genetica.innerHTML = personagem.caracteristicas.genetica;
    } else {
        console.log("Erro ao atualizar genética");
    }

    let aptidao = document.getElementById("characterInfo-aptidoes");
    if (aptidao){
        aptidao.innerHTML = personagem.caracteristicas.aptidao;
    } else {
        console.log("Erro ao atualizar aptidões");
    }

    let maldicao = document.getElementById("characterInfo-maldicoes");
    if (maldicao) {
        maldicao.innerHTML = personagem.caracteristicas.maldicoes;
    } else {
        console.log("Erro ao atualizar maldições");
    }

    let mutacao = document.getElementById("characterInfo-mutacoes");
    if (mutacao){
        mutacao.innerHTML = personagem.caracteristicas.mutacoes;
    } else {
        console.log("Erro ao atualizar mutações");
    }

}    

window.atualizarFicha = atualizarFicha;