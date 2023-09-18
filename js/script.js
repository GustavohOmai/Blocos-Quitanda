const logo = document.getElementById('logosvg');
const header = document.getElementById('header');
const announ = document.getElementById('announcement-bar');
const sizex = window.innerHeight / 2.45;
const elemento = document.getElementById('logo');
const ancoragem = document.getElementById('ancoragem');
const menumobile = document.getElementById('menu-mobile');
const navmobrepo = document.getElementById('navmobrepo');

window.onload = function () {
    logo.style.width = `${sizex}px`;
    logo.style.height = `${sizex}px`;
    header.style.opacity = '0';
    announ.style.opacity = '0';
}

window.addEventListener('scroll', verificarPosicaoElemento);

function verificarPosicaoElemento() {
   
    let posicao = ancoragem.getBoundingClientRect();
    let windowHeight = window.innerHeight;
    if (posicao.top <= 180) {
        elemento.classList.add('elemento-no-topo');
        elemento.classList.remove('logo-absolute');
    }
    if (posicao.top > 180) {
        header.classList.add('fade-in');
        header.style.opacity = '1';
        announ.classList.add('fade-in');
        announ.style.opacity = '1';
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

// Menu Burguer

let checkbox = document.getElementById('checkbox-menu')
let menu = document.getElementById('nav-mob')

function hamburguer() {
  let posicao = ancoragem.getBoundingClientRect();
  if (checkbox.checked) {
    menu.classList.remove('d-none-menu-mobile')
    menumobile.style.marginTop= '-40px';
    disableScroll();
    elemento.classList.add('elemento-no-topo');
    elemento.classList.remove('logo-absolute');
    navmobrepo.style.marginTop= '5rem';
  } else {
    if (posicao.top > 180) {
      menu.classList.add('d-none-menu-mobile')
      navmobrepo.style.marginTop= '2.5rem';
      menumobile.style.marginTop= '0px';
      enableScroll();
      elemento.classList.remove('elemento-no-topo');
      elemento.classList.add('logo-absolute');
    }else{
      menu.classList.add('d-none-menu-mobile')
      navmobrepo.style.marginTop= '2.5rem';
      menumobile.style.marginTop= '0px';
      enableScroll();
      elemento.classList.add('elemento-no-topo');
      elemento.classList.remove('logo-absolute');
      
    }
   
  }
}

function disableScroll() {
  var scrollX = window.scrollX || document.documentElement.scrollLeft;
  var scrollY = window.scrollY || document.documentElement.scrollTop;
  document.styleSheets[0].insertRule("::-webkit-scrollbar { width: 0px; }", 0);
  window.onscroll = function() {
    window.scrollTo(scrollX, scrollY);
    elemento.classList.add('elemento-no-topo');
  };
}

function enableScroll() {
  window.onscroll = null;
  document.styleSheets[0].deleteRule(0);
  elemento.classList.add('elemento-no-topo');
}
// FIM Menu Burguer