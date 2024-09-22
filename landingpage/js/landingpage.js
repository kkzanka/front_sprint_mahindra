document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.querySelector('.overlay');
    const message = document.querySelector('.message');
    const giflanding = document.querySelector('.giflanding');
    const menu = document.getElementById('menu');
    const login = document.querySelector('.login');
    const nextCircuit = document.querySelector('.nextcircuit');
    const race = document.querySelector('.race');
    
    let claridade = false;


    nextCircuit.classList.add('hidden');
    race.classList.add('hidden');
    document.body.classList.add('noscroll');

    overlay.addEventListener('click', function() {
        if (!claridade) {

            overlay.style.backgroundColor = 'rgba(255, 255, 255, 0)';
            message.style.display = 'none';
            giflanding.style.display = 'none';
            overlay.style.cursor = 'default';
            menu.style.display = 'flex';
            login.style.display = 'block';

            // Mostrar as imagens e remover a classe do body
            nextCircuit.classList.remove('hidden');
            race.classList.remove('hidden');
            document.body.classList.remove('noscroll');

        } else {
            // Escurece a tela e mostra a mensagem e o GIF
            overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            message.style.display = 'block';
            giflanding.style.display = 'block';
            overlay.style.cursor = 'pointer';
            menu.style.display = 'none';
            login.style.display = 'none';

            // Ocultar as imagens e adicionar a classe no body
            nextCircuit.classList.add('hidden');
            race.classList.add('hidden');
            document.body.classList.add('noscroll');
        }
        claridade = !claridade; // Alterna o estado
    });
});


