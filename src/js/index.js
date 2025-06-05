/* 
  O que precisamos fazer? - quando clicar no botão do personagem na lista temos que marcar o botão como selecionado e mostrar o personagem correspondente

    OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botao como selecionado 
        passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles
        passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
        passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele 

	OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem
        passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele
        passo 2 - adicionar a classe "selecionado" no personagem que o usuário selecionou
        passo 3 - verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele 
*/



const botoes = document.querySelectorAll(".botao");
const titulos = document.querySelectorAll(".titulo");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        // Remover a seleção do botão atualmente selecionado, se existir
        const botaoSelecionado = document.querySelector(".botao.selecionado");
        if (botaoSelecionado) {
            botaoSelecionado.classList.remove("selecionado");
        }
        // Adicionar a classe "selecionado" ao botão clicado
        botao.classList.add("selecionado");
        // Remover a seleção do título atualmente selecionado, se existir
        const personagemSelecionado = document.querySelector(".titulo.selecionado");
        if (personagemSelecionado) {
            personagemSelecionado.classList.remove("selecionado");
        }
        // Adicionar a classe "selecionado" ao título correspondente
        titulos[indice].classList.add("selecionado");
    });
});



//const botoes = document.querySelectorAll(".botao");
//const titulos = document.querySelectorAll(".titulo");

//botoes.forEach((botao, indice) => {
//	botao.addEventListener("click", () => {
//		const botaoSelecionado = document.querySelector(".botao.selecionado");
//		botaoSelecionado.classList.remove("selecionado");
//		botao.classList.add("selecionado");

//		const personagemSelecionado = document.querySelector(".titulo.selecionado");
//		tituloSelecionado.classList.remove("selecionado");
//		titulo[indice].classList.add("selecionado");
//	});
//});