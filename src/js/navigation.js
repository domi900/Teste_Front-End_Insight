/**
 * Módulo de navegação dinâmica para a dashboard.
 * Exporta a função mostrarSecao.
 */

const SECAO_SELECTOR = '.secao-conteudo';
const MENU_LATERAL_SELECTOR = '.menu-item';
const MENU_SUPERIOR_SELECTOR = '.menu-item-superior';

/**
 * Oculta todas as seções, remove todos os destaques de menu e exibe a seção alvo.
 * @param {string} idSecao - O ID da seção a ser exibida (e.g., 'secaoUsuario').
 * @param {HTMLElement | null} menuItem - O elemento que acionou a função (usado para aplicar o destaque).
 */
export function mostrarSecao(idSecao, menuItem) {
    // 1. Oculta todas as seções (incluindo a 'secaoHome')
    const todasSecoes = document.querySelectorAll(SECAO_SELECTOR);
    todasSecoes.forEach(secao => {
        secao.classList.add('d-none');
    });

    // 2. Remove o destaque de TODOS os itens de menu superior
    const itensDeMenuSuperiorAnteriores = document.querySelectorAll(MENU_SUPERIOR_SELECTOR + '.active-superior');
    itensDeMenuSuperiorAnteriores.forEach(item => {
        item.classList.remove('active-superior');
    });


    // 3. Mostra apenas a seção clicada
    const secaoAlvo = document.getElementById(idSecao);
    if (secaoAlvo) {
        secaoAlvo.classList.remove('d-none');
    } else {
        console.error(`Seção com ID "${idSecao}" não encontrada.`);
    }

    // 4. Adiciona destaque visual ao item que foi clicado (se houver)
    if (menuItem) {
        if (menuItem.classList.contains('menu-item')) {
            // Destaque para menu lateral
            menuItem.classList.add('active');
        } else if (menuItem.classList.contains('menu-item-superior')) {
            // Destaque para menu superior
            menuItem.classList.add('active-superior');
        }
    }
}