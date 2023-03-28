let btn_liga  = document.querySelector('#on-off')
let lampada = document.querySelector('#lamp')

btn_liga.addEventListener('click',function(){
    if (lampada.src.match('lampada-on')){
        lampada.src = './img/lampada-off.gif'
    }else
    {
        lampada.src = './img/lampada-on.gif'
    }
})