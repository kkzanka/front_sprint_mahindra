document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.querySelector('.overlay');
    const message = document.querySelector('.message');
    const giflanding = document.querySelector('.giflanding');
    const menu = document.getElementById('menu');
    const nextCircuit = document.querySelector('.nextcircuit');
    const race = document.querySelector('.race');
    
    let claridade = false;

    
    document.body.classList.add('noscroll');

    overlay.addEventListener('click', function() {
        if (!claridade) {
            overlay.style.backgroundColor = 'rgba(255, 255, 255, 0)';
            message.style.display = 'none';
            giflanding.style.display = 'none';
            overlay.style.cursor = 'default';
            menu.style.display = 'flex';

            
            nextCircuit.classList.remove('hidden');
            race.classList.remove('hidden');
            document.body.classList.remove('noscroll');

        } else {
            
            overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            message.style.display = 'block';
            giflanding.style.display = 'block';
            overlay.style.cursor = 'pointer';
            menu.style.display = 'none';

            
            nextCircuit.classList.add('hidden');
            race.classList.add('hidden');
            document.body.classList.add('noscroll');
        }
        claridade = !claridade;
    });
});


function changeImageBasedOnScreenWidth() {
    const image = document.querySelector('.fullscreen-image img');

    // Verifica o tamanho da tela
    if (window.innerWidth < 768) {
        image.src = "landingpage/img/giflanding.gif";
    } else {
        image.src = "landingpage/img/giflanding.gif";
    }
}


window.onload = () => {
    changeImageBasedOnScreenWidth();
    showMenuOnClick();
};


window.onresize = changeImageBasedOnScreenWidth;



