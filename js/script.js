window.onload = function () {
    const logo = document.getElementById('logosvg');

    const sizex = window.innerHeight / 2.45;
    logo.style.width = `${sizex}px`;
    logo.style.height = `${sizex}px`;
}



function verificarPosicaoElemento() {
    const elemento = document.getElementById('logo');
    const ancoragem = document.getElementById('ancoragem');
    const logo = document.getElementById('logosvg');
    let posicao = ancoragem.getBoundingClientRect();
    let windowHeight = window.innerHeight;
    if (posicao.top <= 120) {
        elemento.classList.add('elemento-no-topo');
        elemento.classList.remove('logo-absolute');
    }
    if (posicao.top > 120) {

        const scrollTop = window.scrollY;

        const initialSize = windowHeight / 2.45;
        const newSize = initialSize - (scrollTop * 0.4);
        const finalSize = newSize;

        logo.style.width = `${finalSize}px`;
        logo.style.height = `${finalSize}px`;

        elemento.classList.remove('elemento-no-topo');
        elemento.classList.add('logo-absolute');
    }
}





window.addEventListener('scroll', verificarPosicaoElemento);