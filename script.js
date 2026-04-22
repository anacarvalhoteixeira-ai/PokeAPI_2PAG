 // HOME
if (document.getElementById('btn-busca')) {
    const btn = document.getElementById('btn-busca');
    const link = document.getElementById('link-detalhes');
    const input = document.getElementById('campo-busca');

    link.style.display = 'none';

    btn.addEventListener('click', () => {
        const nome = input.value.toLowerCase();

        btn.disabled = true;

        fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro');
                }
                return response.json();
            })
            .then(data => {
                link.href = `sobre.html?nome=${nome}`;
                link.style.display = 'inline-block';
            })
            .catch(() => {
                const resultado = document.getElementById('resultado');
                resultado.innerHTML = '<p id="erro">Pokémon não encontrado</p>';
                link.style.display = 'none';
            })
            .finally(() => {
                btn.disabled = false;
            });
    });
}

// DETALHES
if (window.location.pathname.includes('sobre.html')) {
    const params = new URLSearchParams(window.location.search);
    const nome = params.get('nome');

    const container = document.querySelector('detalhes-container');

    if (nome) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`)
            .then(res => res.json())
            .then(data => {
                container.innerHTML = `
                    <div id="info">
                        <h2>${data.name}</h2>
                        <img src="${data.sprites.front_default}" alt="${data.name}">
                        <span class="dado">Altura: ${data.height}</span>
                        <span class="dado">Peso: ${data.weight}</span>
                    </div>
                `;
            })
            .catch(() => {
                container.innerText = 'Erro ao carregar';
            });
    }
}
