$(document).ready(function () {
    // Load the classic theme
    Galleria.loadTheme('{{ STATIC_URL }}js/galleria.classic.min.js');

    // Initialize Galleria
    Galleria.run('#rooms');
    Galleria.run('#equipments');
});
