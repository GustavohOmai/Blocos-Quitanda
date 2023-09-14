 function verificarPosicaoElemento() {
    const elemento = document.getElementById('logo');
    const ancoragem = document.getElementById('ancoragem');
    let posicao = ancoragem.getBoundingClientRect();
    let alturaJanela = window.innerHeight;
    

    console.log(alturaJanela);

    if (posicao.top <= 20) {
        elemento.classList.add('elemento-no-topo');
        elemento.classList.remove('logo-absolute');
    }

    console.log(posicao);

    if (ancoragem.bottom > alturaJanela) {
        elemento.classList.remove('elemento-no-topo');
        elemento.classList.add('logo-absolute');
    }
}

window.addEventListener('scroll', verificarPosicaoElemento);