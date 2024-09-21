document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.querySelector('.overlay');
    const message = document.querySelector('.message');
    const giflanding = document.querySelector('.giflanding');
    const menu = document.getElementById('menu');

    let claridade = false;

    overlay.addEventListener('click', function() {
        if (!claridade) {
            // Clareia a tela e esconde a mensagem e o GIF
            overlay.style.backgroundColor = 'rgba(255, 255, 255, 0)';
            message.style.display = 'none';
            giflanding.style.display = 'none';
            overlay.style.cursor = 'default';
            menu.style.display = 'flex'; // Mostra o menu como flex
        } else {
            // Escurece a tela e mostra a mensagem e o GIF
            overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            message.style.display = 'block';
            giflanding.style.display = 'block';
            overlay.style.cursor = 'pointer';
            menu.style.display = 'none'; // Esconde o menu
        }
        claridade = !claridade; // Alterna o estado
    });
});
