


//Pesquisa dos animais



const campoPesquisa = document.getElementById("campoPesquisa");
const botaoPesquisar = document.getElementById("botaoPesquisar");

const animais = document.querySelectorAll(".animal-card");

function pesquisarAnimais() {

    const pesquisa = campoPesquisa.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();

    animais.forEach(function(card) {

        const nomeAnimal = card.textContent.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        if (nomeAnimal.includes(pesquisa)) {
            card.closest(".col-12").style.display = "";
        } else {
            card.closest(".col-12").style.display = "none";
        }

    });

}

if (campoPesquisa && botaoPesquisar) {

    campoPesquisa.addEventListener("input", pesquisarAnimais);

    botaoPesquisar.addEventListener("click", pesquisarAnimais);

}


// CADASTRO DE USUÁRIOS


const formCadastro = document.getElementById("formCadastro");

if (formCadastro) {

    formCadastro.addEventListener("submit", function(event) {

        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const senha = document.getElementById("senha").value;
        const confirmarSenha = document.getElementById("confirmarSenha").value;

        if (senha !== confirmarSenha) {
            alert("As senhas não coincidem!");
            return;
        }

        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        const emailExiste = usuarios.some(usuario => usuario.email.toLowerCase() === email.toLowerCase());

        if (emailExiste) {
            alert("Este email já está cadastrado!");
            return;
        }

        const novoUsuario = { nome: nome, email: email, senha: senha};

        usuarios.push(novoUsuario);

        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        alert("Cadastro realizado com sucesso!");

        formCadastro.reset();

        window.location.href = "login.html"

    });

}

// LOGIN DE USUÁRIOS


const formLogin = document.getElementById("formLogin");

if (formLogin) {

    formLogin.addEventListener("submit", function(event) {

        event.preventDefault();

        const email = document.getElementById("emailLogin").value.trim();
        const senha = document.getElementById("senhaLogin").value;

        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        const usuarioEncontrado = usuarios.find(usuario => usuario.email.toLowerCase() === email.toLowerCase() && usuario.senha === senha);

        if (usuarioEncontrado) {

            alert("Login realizado com sucesso!");

            window.location.href = "index.html";

        } else {

            alert("Email ou senha incorretos!");

        }

    });

}