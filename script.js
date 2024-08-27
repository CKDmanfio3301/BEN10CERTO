
document.addEventListener('DOMContentLoaded', () => {
    const passos = document.querySelectorAll('.passo');
    let passoAtivo = 0;

    function mostrarPasso(passoIndex) {
        passos.forEach((passo, index) => {
            passo.classList.toggle('ativo', index === passoIndex);
        });
    }

    document.querySelectorAll('.btn-proximo').forEach(button => {
        button.addEventListener('click', () => {
            const proximoPasso = parseInt(button.getAttribute('data-proximo'), 10);
            if (proximoPasso >= 0 && proximoPasso < passos.length) {
                passoAtivo = proximoPasso;
                mostrarPasso(passoAtivo);
            }
        });
    });

    // Inicializa mostrando o primeiro passo
    mostrarPasso(passoAtivo);
});
