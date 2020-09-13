if(screen.width < 1030){ //identificador do tamanho da tela para a prevenção de bugs

    location.href  = 'mindex.html'



















}else{

    function voltar() {

        
        document.documentElement.scrollTop = 0
    }
    function anime() {
        var windowTop = window.pageYOffset; //váriavel do scroll
        console.log(windowTop)// declaração no console
        var seta = document.getElementById('seta')
        var quemsomos = document.getElementById("quem-somos-h1")
        var quemsomosp = document.getElementById('quem-somos-p')
        var serviços = document.getElementById('serviços-h1')
        var btvoltar2 = document.getElementById('voltar')
        if(windowTop > 266) {
            quemsomos.classList.add('quem-somos-h1-scroll')
        }else {
            quemsomos.classList.remove('quem-somos-h1-scroll')
        }
        if(windowTop > 320) {
            quemsomosp.classList.add('quem-somos-p-scroll')
        }else {
            quemsomosp.classList.remove('quem-somos-p-scroll')
        }
        if(windowTop != 483) {
            seta.style.left = '220%'
        }
        if(windowTop >0) {
            btvoltar2.style.fontSize = '30px'
            btvoltar2.style.transition = 'all 1s'
            btvoltar2.style.marginTop = '-35%'
        }else {
            btvoltar2.style.fontSize = '10px'
            btvoltar2.style.marginTop = '35%'
            btvoltar2.style.transition = 'all 1s'
        }
        if(windowTop > 759) {
            serviços.classList.add('scrolly')
        }else {
            serviços.classList.remove('scrolly')
        }

    }

    window.addEventListener('scroll', function(){ //declarando a função para o scroll
        anime();
    });
}