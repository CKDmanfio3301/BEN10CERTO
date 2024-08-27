// Certifique-se de que o DOM está completamente carregado
document.addEventListener('DOMContentLoaded', () => {
    const passos = document.querySelectorAll('.passo');
    const botoesProximo = document.querySelectorAll('.btn-proximo');

    botoesProximo.forEach((botao) => {
        botao.addEventListener('click', () => {
            const proximoPasso = botao.getAttribute('data-proximo');
            const passoProximo = document.getElementById(`passo-${proximoPasso}`);

            // Adicione logs para depuração
            console.log(`Próximo passo: ${proximoPasso}`);
            console.log(`Passo próximo elemento:`, passoProximo);

            // Remover a classe 'ativo' de todos os passos
            passos.forEach((passo) => {
                passo.classList.remove('ativo');
            });

            // Adicionar a classe 'ativo' ao próximo passo
            if (passoProximo) {
                passoProximo.classList.add('ativo');
            } else {
                console.error(`Não foi possível encontrar o passo com ID passo-${proximoPasso}`);
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Referência ao botão secreto e ao passo secreto
    const botaoSecreto = document.getElementById('botao-secreto');
    const passoSecreto = document.getElementById('passo-secreto');

    // Mostrar o botão secreto após 5 segundos (ajustar conforme necessário)
    setTimeout(function() {
        botaoSecreto.style.display = 'block';
    }, 5000); // 5000 ms = 5 segundos

    // Adicionar evento de clique ao botão secreto
    botaoSecreto.addEventListener('click', function() {
        passoSecreto.style.display = 'block';
        botaoSecreto.style.display = 'none'; // Opcional: Ocultar o botão secreto após o clique
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const botaoSecreto = document.getElementById('botao-secreto');
    const passos = document.querySelectorAll('.passo');
    const primeiroPasso = document.getElementById('passo-0');

    // Verifica se o passo atual é o primeiro
    function verificarPassoAtual() {
        const passoAtual = document.querySelector('.passo.ativo');
        if (passoAtual === primeiroPasso) {
            botaoSecreto.style.display = 'block'; // Exibe o botão
        } else {
            botaoSecreto.style.display = 'none'; // Esconde o botão
        }
    }

    // Atualiza a visibilidade do botão ao carregar a página
    verificarPassoAtual();

    // Atualiza a visibilidade do botão ao mudar de passo
    document.querySelectorAll('.btn-proximo').forEach(btn => {
        btn.addEventListener('click', verificarPassoAtual);
    });
});
