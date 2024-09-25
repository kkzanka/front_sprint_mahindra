// Carregar equipes do JSON
fetch('../data/equipes.json') 
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao carregar o JSON');
        }
        return response.json();
    })
    .then(data => {
        displayTeams(data);
    })
    .catch(error => {
        console.error('Erro:', error);
    });

let currentIndex = 0; 
let teams = []; 

function displayTeams(data) {
    teams = data; 
    renderTeam();
}

function renderTeam() {
    const teamList = document.getElementById('team-list');
    teamList.innerHTML = `
        <div class="team">
            <h2>${teams[currentIndex].name}</h2>
            <img src="${teams[currentIndex].logo}" alt="${teams[currentIndex].name}" />
            <p>${teams[currentIndex].description}</p>
        </div>
    `;

    // Atualiza os botões
    updateButtons();
}

function moveCarousel(direction) {
    const totalTeams = teams.length;

    // Atualiza o índice com base na direção
    currentIndex += direction;

    // Restringir o índice dentro do limite
    if (currentIndex < 0) {
        currentIndex = totalTeams - 1; 
    } else if (currentIndex >= totalTeams) {
        currentIndex = 0; 
    }

    // Renderiza a equipe atual
    renderTeam();
}

function updateButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    prevBtn.disabled = (currentIndex === 0); 
    nextBtn.disabled = (currentIndex === teams.length - 1); 
}

const prevBtn = document.createElement('button');
prevBtn.id = 'prevBtn';
prevBtn.innerText = '❮'; 
prevBtn.onclick = () => moveCarousel(-1);
document.getElementById('team-list').appendChild(prevBtn);

const nextBtn = document.createElement('button');
nextBtn.id = 'nextBtn';
nextBtn.innerText = '❯'; 
nextBtn.onclick = () => moveCarousel(1);
document.getElementById('team-list').appendChild(nextBtn);
