let resultado=""


function search(){

    let campoPesquisa= document.querySelector("#pesquisa").value.toLowerCase()

    let section=document.querySelector("#resultado-pesquisa")


    resultado=""


    for(let dado of duvidas){
        if(dado.pergunta.toLowerCase().includes(campoPesquisa) ){
            resultado+=
            `<div class="resposta">
                <h2>${dado.sobre}. </h2>
                <p>${dado.resposta}</p>
            </div>`
        }
    }
    if(campoPesquisa==""){
        section.innerHTML=`Digite sua pergunta.`
        return
    }


    section.innerHTML= resultado || `Desculpa não conseguimos responder essa pergunta.`
}

document.querySelector("#btn").addEventListener("click",search)

