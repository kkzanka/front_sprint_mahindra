document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.querySelector('.overlay');
    const message = document.querySelector('.message');
    const giflanding = document.querySelector('.giflanding');
    const menu = document.querySelector('.navbar');
    const nextCircuit = document.querySelector('.nextcircuit'); 
    const race = document.querySelector('.race'); 
    const scrollButton = document.getElementById('scrollButton');
    const nextSection = document.getElementById('nextSection');
    const logo = document.querySelector('.logo');

    let claridade = false;

    // Desativa o scroll inicial
    document.body.classList.add('noscroll');

    // Evento de clique na overlay
    overlay.addEventListener('click', function() {
        claridade = !claridade; // Mude o estado da clareza aqui

        if (claridade) {
            overlay.style.backgroundColor = 'rgba(255, 255, 255, 0)';
            message.style.display = 'none';
            giflanding.style.display = 'none';
            overlay.style.cursor = 'default';
            menu.style.display = 'flex';
            scrollButton.style.display = "flex";
            logo.style.display = "none";

            if (nextCircuit) nextCircuit.classList.remove('hidden');
            if (race) race.classList.remove('hidden');

            document.body.classList.remove('noscroll');
            scrollButton.disabled = false;
        } else {
            overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            message.style.display = 'block';
            giflanding.style.display = 'block';
            overlay.style.cursor = 'pointer';
            menu.style.display = 'none';
            scrollButton.style.display = "none"
            logo.style.display = "flex";

            document.body.classList.add('noscroll');
            scrollButton.disabled = true;

            if (nextCircuit) nextCircuit.classList.add('hidden');
            if (race) race.classList.add('hidden');
        }
    });

    if (scrollButton) {
        scrollButton.addEventListener('click', function() {
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    function changeImageBasedOnScreenWidth() {
        const image = document.querySelector('.fullscreen-image img');

        if (window.innerWidth < 768) {
            image.src = "assets/img/giflanding.gif";
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
});