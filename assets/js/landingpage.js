document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.querySelector('.overlay');
    const message = document.querySelector('.message');
    const giflanding = document.querySelector('.giflanding');
    const menu = document.getElementById('menu');
    const nextCircuit = document.querySelector('.nextcircuit'); // Certifique-se de que este elemento existe
    const race = document.querySelector('.race'); // Certifique-se de que este elemento existe
    const scrollButton = document.getElementById('scrollButton');
    const nextSection = document.getElementById('nextSection');

    let claridade = false;

    // Desativa o scroll inicial
    document.body.classList.add('noscroll');

    // Evento de clique na overlay
    overlay.addEventListener('click', function() {
        if (!claridade) {
            // Clareia a tela e esconde o overlay
            overlay.style.backgroundColor = 'rgba(255, 255, 255, 0)';
            message.style.display = 'none';
            giflanding.style.display = 'none';
            overlay.style.cursor = 'default';
            menu.style.display = 'grid'; // Usando grid no menu

            // Mostra os elementos da próxima seção
            if (nextCircuit) nextCircuit.classList.remove('hidden');
            if (race) race.classList.remove('hidden');

            // Habilita o scroll e o botão
            document.body.classList.remove('noscroll');
            scrollButton.disabled = false;
        } else {
            // Retorna ao estado original
            overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            message.style.display = 'block';
            giflanding.style.display = 'block';
            overlay.style.cursor = 'pointer';
            menu.style.display = 'none';

            // Esconde os elementos da próxima seção
            if (nextCircuit) nextCircuit.classList.add('hidden');
            if (race) race.classList.add('hidden');
        }
        claridade = !claridade;
    });

    // Evento para rolar para a próxima seção ao clicar no botão
    scrollButton.addEventListener('click', function() {
        nextSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Função para alterar a imagem com base na largura da tela
    function changeImageBasedOnScreenWidth() {
        const image = document.querySelector('.fullscreen-image img');

        // Imagem deve ser ajustada conforme a tela
        if (window.innerWidth < 768) {
            image.src = "assets/img/giflanding.gif"; // Altere para a imagem desejada para telas menores
        } else {
            image.src = "assets/img/giflanding.gif"; // Altere para a imagem desejada para telas maiores
        }
    }

    // Chamada inicial e ao redimensionar
    changeImageBasedOnScreenWidth();
    window.onresize = changeImageBasedOnScreenWidth;
});
