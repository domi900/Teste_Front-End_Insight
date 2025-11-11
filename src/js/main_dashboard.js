// Importa a função de navegação do módulo navigation.js
import { mostrarSecao } from './navigation.js';

// Seletores para os dois tipos de menus
const menuItemsLateral = document.querySelectorAll('.menu-item');
const menuItemsSuperior = document.querySelectorAll('.menu-item-superior');

/**
 * Inicializa a navegação dinâmica ao carregar o DOM.
 */
document.addEventListener('DOMContentLoaded', () => {

    // LÓGICA DO MENU SUPERIOR
    menuItemsSuperior.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            const idSecao = this.getAttribute('data-secao');
            if (idSecao) {
                // A função mostrarSecao lida com tudo, incluindo a remoção do destaque lateral
                // e aplicação do destaque no item superior clicado.
                mostrarSecao(idSecao, this);
            }
        });
    });
});
// Importando a função do arquivo sidebar.js
import { initSidebar } from './sidebar.js';
// chama a função para ativar o código da sidebar
initSidebar();
