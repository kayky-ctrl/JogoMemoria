document.addEventListener('DOMContentLoaded', function() {

    // Seleciona os elementos do HTML que vamos usar
    const meuBotao = document.getElementById("meuBotao");
    const modalVitoria = document.getElementById("modalVitoria");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const playAgain = document.getElementById("playAgain");

    // Verifica se os elementos foram encontrados antes de adicionar os eventos
    if (meuBotao && modalVitoria && closeModalBtn && playAgain) {

        // Função para mostrar o modal
        function abrirModal() {
            modalVitoria.classList.remove("hidden");
            playAgain.classList.remove("hidden")
        }

        // Função para esconder o modal
        function fecharModal() {
            modalVitoria.classList.add("hidden");
            playAgain.classList.add("hidden");
        }

        // Adiciona o evento para ABRIR o modal quando o botão "Buuh!" for clicado
        meuBotao.addEventListener("click", abrirModal);

        // Adiciona o evento para FECHAR o modal quando o botão "X" for clicado
        closeModalBtn.addEventListener("click", fecharModal);

        // Fecha o modal se o usuário clicar na área escura (fora da caixa roxa)
        modalVitoria.addEventListener("click", function (event) {
            // Verifica se o clique foi no fundo (modal-overlay) e não nos filhos dele
            if (event.target === modalVitoria) {
                fecharModal();
            }
        });

        playAgain.addEventListener("click", fecharModal);

    } else {
        // Se algum elemento não for encontrado, mostra um aviso no console
        console.error("Não foi possível encontrar um ou mais elementos do modal no HTML. Verifique os IDs.");
    }

});