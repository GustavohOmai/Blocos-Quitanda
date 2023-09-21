const menumobile = document.getElementById('menu-mobile');
const navmobrepo = document.getElementById('navmobrepo');
// Menu Burguer

let checkbox = document.getElementById('checkbox-menu')
let menu = document.getElementById('nav-mob')

function hamburguer() {
  if (checkbox.checked) {
    menu.classList.remove('d-none-menu-mobile')
    menumobile.style.marginTop= '-40px';
    disableScroll();
    navmobrepo.style.marginTop= '5rem';
  } else {
      menu.classList.add('d-none-menu-mobile')
      navmobrepo.style.marginTop= '2.5rem';
      menumobile.style.marginTop= '0px';
      enableScroll();
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