// Carregar equipes do JSON
fetch('../data/equipes.json')  // Ajuste o caminho se necessário
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

function displayTeams(teams) {
    const teamList = document.getElementById('team-list');
    teamList.innerHTML = teams.map(team => `
        <div class="team">
            <h2>${team.name}</h2>
            <img src="${team.logo}" alt="${team.name}" />
            <p>${team.description}</p>
        </div>
    `).join('');
}
