if(screen.width > 1030){location.href = 'index.html'}
function play() {
    var c = document.getElementById('oq')
    alert(c.value)
}
function anime() {
    var windowTop = pageYOffset
    console.log(windowTop)
    if(windowTop = 819) {
        var t = document.getElementById('quem-somos-h1')
        
    }
}
window.addEventListener('scroll', function () {
    anime()
})