


//Pesquisa dos animais



const campoPesquisa = document.getElementById("campoPesquisa");
const botaoPesquisar = document.getElementById("botaoPesquisar");

const animais = document.querySelectorAll(".animal-card");


function pesquisarAnimais() {

    const pesquisa = campoPesquisa.value
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();

    animais.forEach(function(card) {

        const nomeAnimal = card.textContent
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");

        if (nomeAnimal.includes(pesquisa)) {

            card.closest(".col-12").style.display = "";

        } else {

            card.closest(".col-12").style.display = "none";

        }

    });

}


campoPesquisa.addEventListener("input", pesquisarAnimais);


botaoPesquisar.addEventListener("click", pesquisarAnimais);