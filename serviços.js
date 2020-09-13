(function () { // código copiado e alterado para topo flutuante
    var fotinha = document.getElementById('topimg')
    var menu = document.getElementById('topo'); // colocar em cache
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0){ menu.classList.add('menuFixo'); fotinha.setAttribute('src', 'nout.png'); // > 0 ou outro valor desejado
    }else{ menu.classList.remove('menuFixo'); fotinha.setAttribute('src', 'logo2.jpg');}
    });
})();

function anime() {
    var windowTop = window.pageYOffset
    var windowLeft = window.pageXOffset
    if(windowLeft != 0 || windowTop != 0){
        if(window.innerWidth <= 1064) {
        location.href = 'mserviços.html'
        }  
    }

}


window.addEventListener('scroll', function (){
    var windowTop = window.pageYOffset
    anime();
    console.log(windowTop)
})