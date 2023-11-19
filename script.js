document.addEventListener('DOMContentLoaded', function () {
    const toggleModeButton = document.getElementById('toggleModeButton');
    const body = document.body;
    const container = document.querySelector('.color-mode-container');

    // Verifique se há uma preferência de cor salva no localStorage
    const savedColorMode = localStorage.getItem('colorMode');

    // Se houver uma preferência salva, aplique-a
    if (savedColorMode) {
        body.classList.add(savedColorMode);
        updateButtonStyle(body.classList.contains('dark-mode'));
    }

    // Adicione um ouvinte de evento ao botão para alternar entre os modos claro e escuro
    toggleModeButton.addEventListener('click', function () {
        // Toggle entre os modos claro e escuro no body
        body.classList.toggle('dark-mode');

        // Toggle entre os modos claro e escuro na div color-mode-container
        container.classList.toggle('dark-mode-container', body.classList.contains('dark-mode'));

        // Atualize o estilo do botão
        updateButtonStyle(body.classList.contains('dark-mode'));

        // Verifique se o modo escuro está ativo e salve a preferência no localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('colorMode', 'dark-mode');
        } else {
            // Se o modo claro estiver ativo, remova a preferência do localStorage
            localStorage.removeItem('colorMode');
        }
    });

    function updateButtonStyle(isDarkMode) {
        // Atualize o estilo do botão com base no modo atual
        toggleModeButton.style.backgroundColor = isDarkMode ? '#3100E0' : '#2600AD';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const toggleModeButton = document.getElementById('toggleModeButton');
    const body = document.body;
    const container = document.querySelector('.color-mode-container');
    
    // Adicionando contador para o botão "Alterar Modo"
    let modeToggleClickCount = 0;

    // Utilizando um "for" loop para adicionar ouvinte de evento
    for (let i = 0; i < 1; i++) {
        toggleModeButton.addEventListener('click', function () {
            // Incrementa o contador
            modeToggleClickCount++;

            // Exibe o contador
            updateClickCounter(modeToggleClickCount);
        });
    }

    function updateClickCounter(count) {
        const clickCounterElement = document.getElementById('modeToggleClickCounter');
        clickCounterElement.textContent = `Clique no botão de alterar modo: ${count} vezes.`;
    }

    function updateButtonStyle(isDarkMode) {
        // Atualize o estilo do botão com base no modo atual
        toggleModeButton.style.backgroundColor = isDarkMode ? '#3100E0' : '#2600AD';
        container.classList.toggle('dark-mode-container', isDarkMode);
    }
});

