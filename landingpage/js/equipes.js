
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

// Exibir as equipes ao carregar o JSON
function displayTeams(data) {
    teams = data; 
    renderTeam(); // Renderiza a primeira equipe ao iniciar
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
}

// Função para mover o carrossel
function moveCarousel(direction) {
    currentIndex += direction;

    // Loop entre o primeiro e o último
    if (currentIndex < 0) {
        currentIndex = teams.length - 1; // Volta para o último
    } else if (currentIndex >= teams.length) {
        currentIndex = 0; // Volta para o primeiro
    }

    // Renderiza a equipe atualizada
    renderTeam();
}

// Event listeners para os botões de navegação
document.getElementById('prevBtn').addEventListener('click', () => moveCarousel(-1));
document.getElementById('nextBtn').addEventListener('click', () => moveCarousel(1));
