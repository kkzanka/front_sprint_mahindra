document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.querySelector('.overlay');
    const message = document.querySelector('.message');
    const giflanding = document.querySelector('.giflanding');
    const menu = document.querySelector('.navbar'); // Seleciona a navbar do Bootstrap
    const nextCircuit = document.querySelector('.nextcircuit'); // Certifique-se de que este elemento existe
    const race = document.querySelector('.race'); // Certifique-se de que este elemento existe
    const scrollButton = document.getElementById('scrollButton');
    const nextSection = document.getElementById('nextSection');
    const videoHorizontal = document.getElementById('videoHorizontal');
    const videoVertical = document.getElementById('videoVertical');

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
            menu.style.display = 'flex'; // Mostra a navbar do Bootstrap

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
            menu.style.display = 'none'; // Esconde a navbar

            document.body.classList.add('noscroll');
            scrollButton.disabled = true;

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
            image.src = "assets/img/giflanding.gif"; 
        }
    }

    changeImageBasedOnScreenWidth();

    window.addEventListener('resize', function() {
        if (claridade) {
            document.body.classList.remove('noscroll');
        } else {
            document.body.classList.add('noscroll');
        }
    });

    function toggleVideo() {
        if (window.innerWidth <= 768) { // Ajuste o ponto de quebra conforme necessário
            videoHorizontal.style.display = 'none';
            videoVertical.style.display = 'block';
        } else {
            videoHorizontal.style.display = 'block';
            videoVertical.style.display = 'none';
        }
    }

    // Adiciona o evento para verificar o redimensionamento da tela
    window.addEventListener('resize', toggleVideo);

    // Chama a função no carregamento da página
    window.addEventListener('load', toggleVideo);
});

