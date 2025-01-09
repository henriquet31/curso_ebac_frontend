function mensagemPopup() {
    const bemVindo = document.createElement('div');
    bemVindo.id = 'bem-vindo';
    bemVindo.textContent = 'Olá, seja bem-vindo(a) ao meu site!';

    bemVindo.style.position = 'fixed';
    bemVindo.style.top = '50%';
    bemVindo.style.left = '50%';
    bemVindo.style.transform = 'translate(-50%, -50%)';
    bemVindo.style.padding = '20px';
    bemVindo.style.backgroundColor = '#fff';
    bemVindo.style.border = '1px solid #ccc';
    bemVindo.style.boxShadow = '0 0 10px rgba(0,0,0,0.1)';
    bemVindo.style.zIndex = '1000';

    document.body.appendChild(bemVindo);

    setTimeout(function() {
        bemVindo.remove();
    }, 2000);
}

window.onload = mensagemPopup;
