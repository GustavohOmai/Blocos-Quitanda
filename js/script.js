window.onload = function () {
    const logo = document.getElementById('logosvg');
    const header = document.getElementById('header');

    const sizex = window.innerHeight / 2.45;
    logo.style.width = `${sizex}px`;
    logo.style.height = `${sizex}px`;
    header.style.opacity = '0';
}

function verificarPosicaoElemento() {
    const header = document.getElementById('header');
    const elemento = document.getElementById('logo');
    const ancoragem = document.getElementById('ancoragem');
    const logo = document.getElementById('logosvg');
    let posicao = ancoragem.getBoundingClientRect();
    let windowHeight = window.innerHeight;
    if (posicao.top <= 180) {
        elemento.classList.add('elemento-no-topo');
        elemento.classList.remove('logo-absolute');
    }
    if (posicao.top > 180) {
        header.classList.add('fade-in');
        header.style.opacity = '1';
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


// Menu Burguer

let checkbox = document.getElementById('checkbox-menu')
let menu = document.getElementById('nav-mob')

function hamburguer() {
  if (checkbox.checked) {
    menu.classList.remove('d-none')
  } else {
    menu.classList.add('d-none')
  }
}

// FIM Menu Burguer