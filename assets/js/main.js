getTime = (seg) => {
    const data = new Date(seg * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let seg = 0;
let timer;

startWatch = () => {
    timer = setInterval(function(){
        seg ++;
        relogio.innerHTML = getTime(seg)
    }, 1000);
}

document.addEventListener('click', function(e){
    const elements = e.target;
    if(elements.classList.contains('iniciar')) {
        relogio.classList.add('contagem');
        relogio.classList.remove('pausado');
        relogio.classList.remove('zerado');
    clearInterval(timer);
    startWatch();
    }
    if(elements.classList.contains('pausar')) {
        relogio.classList.add('pausado');
        relogio.classList.remove('contagem');
        relogio.classList.remove('zerado');
        clearInterval(timer);
    }
    if(elements.classList.contains('zerar')) {
        relogio.classList.add('zerado');
        relogio.classList.remove('pausado');
        relogio.classList.remove('contagem');
        clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    seg = 0;
    }
})
