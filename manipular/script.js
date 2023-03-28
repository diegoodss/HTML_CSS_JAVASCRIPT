let input_atual = document.querySelector('#atual')

let bot_add = document.querySelector('#incremento')

let bot_sub = document.querySelector('#decremento')

var aux = input_atual.value

bot_add.addEventListener('click',function(){
    aux ++
    input_atual.value = aux
    console.log(aux)
})

bot_sub.addEventListener('click',function(){
    if (aux >0){
        aux --;
        input_atual.value = aux
        console.log(aux)
    }else{
        aux = 0
        input_atual.value = aux
    }
})

