export function initSidebar() {
    const sidebar = document.querySelector('.side_bar');
    const openBtn = document.querySelector('#open_btn');
        // Adiciona um evento de clique no botão
    openBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });
}