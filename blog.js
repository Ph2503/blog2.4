
(function () {
    var fotinha = document.querySelector('#topimg-img')
    var menu = document.getElementById('topo'); // colocar em cache
    fotinha.style.transition = 'all .5s'
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0){ menu.classList.add('menuFixo'); fotinha.setAttribute('src', 'nout.png'); // > 0 ou outro valor desejado
    }else{ menu.classList.remove('menuFixo'); fotinha.setAttribute('src', 'logo2.jpg');}
    });
})();
function tecla(){
    console.log("O código da tecla pressionada foi: " + event.keyCode);
}

function closin() {
    var aviso = document.getElementById('telacheia')
    aviso.classList.remove('pop')
}

var n = 0;
window.setInterval(function(){
  if(n == 110) {
    var aviso = document.getElementById('telacheia')
    aviso.classList.add('pop')

  }else if(n == 360) {
    var aviso = document.getElementById('telacheia')
    aviso.classList.add('pop')
  }else if(n == 480) {
    var aviso = document.getElementById('avisodescanço') 
    aviso.classList.add('pop')
  }else if(n == 800) {
    var aviso = document.getElementById('avisodescanço') 
    aviso.classList.add('pop')
  }else if (n == 1010) {
    var aviso = document.getElementById('telacheia')
    aviso.classList.add('pop')
  }
  n++;
},1000);

function play() {
    var c = document.getElementById('oq')
    alert(c.value)
}
var cont = 0
function suave() {
    var p = document.getElementById('modo-suave-p')
    if(cont == 0) {
        var bt = window.document.getElementById('bt-suave')
        var area = document.getElementById('div-suave')
        var div = document.getElementById('area-suave')
        var content = document.getElementById('content')
        p.innerHTML = 'Modo Colorido'
        bt.classList.add('bt-suave-active')
        content.classList.add('content-suave')
        div.classList.add('area')
        area.classList.add('div-suave')
        cont++
    }else {
        var content = document.getElementById('content')
        var area = document.getElementById('div-suave')
        var div = document.getElementById('area-suave')
        p.innerHTML = 'Modo Dark'
        var bt = window.document.getElementById('bt-suave')
        bt.classList.remove('bt-suave-active')
        content.classList.remove('content-suave')
        area.classList.remove('div-suave')
        div.classList.remove('area')
        cont--
    }
    
    
}
function descanço() {
    
    if(cont == 0) {
        var bt = document.getElementById('bt-descanço')
        bt.classList.add('bt-descanço-active')
        var olho = document.getElementById('olho')
        olho.setAttribute('src', 'olhofechado.png')
        olho.style.marginLeft = '12%'
        document.body.classList.add('descanço')
        cont++
    }else {
        var bt = document.getElementById('bt-descanço')
        bt.classList.remove('bt-descanço-active')
        var olho = document.getElementById('olho')
        olho.setAttribute('src', 'olhoaberto.png')
        document.body.classList.remove('descanço')
        cont--
    }
}
function descanço2() {


    if(cont == 0) {

        var bt = document.getElementById('bt-descanço')
        var ativar = document.getElementById('ativar')
        ativar.innerHTML = 'desativar'
        ativar.style.width = '75px'
        ativar.style.marginLeft = '85%'

        bt.classList.add('bt-descanço-active')
        document.body.classList.add('descanço')
        cont++
    }else {

        var bt = document.getElementById('bt-descanço')
        var ativar = document.getElementById('ativar')
        ativar.innerHTML = 'ativar'

        bt.classList.remove('bt-descanço-active')
        document.body.classList.remove('descanço')
        cont--
    }
}
function closin2() {
    var aviso = document.getElementById('avisodescanço')
    aviso.classList.remove('pop')
}
var imagem = document.getElementById('imagem')
var cont = 0

var btvoltar = document.getElementById('negativo')
var btir = document.getElementById('positivo')

function positive() {
    if(cont<4) {

        cont++
        btir.style.opacity = '100%'
    }
    if(cont == 0){
        btvoltar.style.opacity = '100%'
    }else {
        btvoltar.style.opacity = '100%'

    }
    if(cont == 4) {
        btir.style.opacity = '100%'
    }else {
        btir.style.opacity = '100%'

    }
    if (cont == 0) {
        imagem.src = 'maoprincipal.jpg'
        imagem.style.width = '280px'
        imagem.style.height = '350px'
        imagem.style.transition = 'all 1s'
        imagem.style.border = '1px black solid'
        imagem.style.borderRadius = '8px'
    }else if(cont == 1) {
        imagem.src = 'maocentralapp.jpg'
        imagem.style.width = '300px'
        imagem.style.height = '390px'
        imagem.style.transition = 'all 1s'
        imagem.style.border = '1px black solid'
        imagem.style.borderRadius = '8px'
    }else if(cont == 2) {
        imagem.src = 'maohapp.jpg'
        imagem.style.width = '270px'
        imagem.style.height = '370px'
        imagem.style.border = '1px black solid'
        imagem.style.borderRadius = '8px'
        imagem.style.transition = 'all 1s'
    }else if(cont == 3) {
        imagem.src = 'maodataapp.jpg'
        imagem.style.width = '270px'
        imagem.style.height = '370px'
        imagem.style.border = '1px black solid'
        imagem.style.borderRadius = '8px'
        imagem.style.transition = 'all 1s'
    }

}


function negative() {
    

    if(cont == 4) {
        btir.style.opacity = '100%'
    }else {
        btir.style.opacity = '100%'

    }
    if(cont == 0) {
        btvoltar.style.opacity = '100%'
    }
    if(cont>0) {
        cont--
        btvoltar.style.opacity = '100%'
    }

    if (cont == 0) {
        imagem.src = 'maoprincipal.jpg'
        imagem.style.width = '280px'
        imagem.style.height = '350px'
        imagem.style.border = '1px black solid'
        imagem.style.borderRadius = '8px'
        imagem.style.transition = 'all 1s'
    }else if(cont == 1) {
        imagem.src = 'maocentralapp.jpg'
        imagem.style.width = '300px'
        imagem.style.height = '390px'
        imagem.style.border = '1px black solid'
        imagem.style.borderRadius = '8px'
        imagem.style.transition = 'all 1s'
    }else if(cont == 2) {
        imagem.src = 'maohapp.jpg'
        imagem.style.width = '270px'
        imagem.style.height = '370px'
        imagem.style.border = '1px black solid'
        imagem.style.borderRadius = '8px'
        imagem.style.transition = 'all 1s'
    }else if(cont == 3) {
        imagem.src = 'maodataapp.jpg'
        imagem.style.width = '270px'
        imagem.style.height = '370px'
        imagem.style.border = '1px black solid'
        imagem.style.borderRadius = '8px'
        imagem.style.transition = 'all 1s'
    }


    

}
function apptamanhodatela() {

}
/*
maocentralapp.jpg     width="300px" height="390px" 
maodataapp.jpg        width="270px" height="370px
maohapp.jpg           width="270px" height="370px
maoprincipal.jpg      width="280px" height="350px"


*/

