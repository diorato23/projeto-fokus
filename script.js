const html = document.querySelector('html');

const botonCorto = document.querySelector('.app__card-button--corto');
const botonEnfoque = document.querySelector('.app__card-button--enfoque');
const botonLargo = document.querySelector('.app__card-button--largo');

const banner = document.querySelector('.app__image');

const titulo = document.querySelector('.app__title');




function cambiarContexto(contexto) {
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src',`./imagenes/${contexto}.png`)
    
}

botonCorto.addEventListener('click', () => {
    titulo.innerHTML = '¿Qué tal tomar un respiro?<strong class="app__title-strong"> ¡Haz una pausa corta!</strog>'
    cambiarContexto('descanso-corto')
});

botonLargo.addEventListener('click', () => {
    titulo.innerHTML = 'Hora de volver a la superficie<strong class="app__title-strong"> Haz una pausa larga.</strong>'
    cambiarContexto('descanso-largo')
});

botonEnfoque.addEventListener('click', () => {
    titulo.innerHTML = 'Otimizar tu produtividad,<strong class="app__title-strong"> sumérgete en lo que importa.</strong>'
    cambiarContexto('enfoque')
});
