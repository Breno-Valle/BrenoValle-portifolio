// slider boxes selected
const projetosSlider = window.document.querySelector('.projetos-slider')
const projetosImg = window.document.querySelectorAll('.projetos-slider img')

// buttons selected
const prev = window.document.querySelector('#prevbutton')
const next = window.document.querySelector('#nextbutton')

//counters
//usando let para update
let counter = 1
const size= projetosImg[0].clientWidth;
// tamanho de uma imagem

// para começar na primeira imagem
// desloca a uma imagem para a direita
projetosSlider.style.transform = 'translateX(' + (-size*counter) + 'px)';


// button listeners
next.addEventListener('click', next_img)

function next_img(){
        //previne que crashe por cliques rapidos no next button
    if (counter >= projetosImg.length - 1) return
    // transition controla uma propriedade de animação 
    //quando há uma mudança de propriedade css
    projetosSlider.style.transition = "transform 0.4s ease-in-out"
    counter++
    projetosSlider.style.transform = 'translateX(' + (-size*counter) + 'px)';
}

prev.addEventListener('click', prev_img)

function prev_img(){
    //previne que crashe por cliques rapidos no prev button
    if (counter <= 0) return
    projetosSlider.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    projetosSlider.style.transform = 'translateX(' + (-size*counter) + 'px)';
}


//transitionend returns a call when the animation ends
projetosSlider.addEventListener('transitionend', animation)

function animation(){
    if (projetosImg[counter].id === 'last-slide'){
        //removendo a transição pula-se direto
        // para a primeira imagem
        projetosSlider.style.transition = "none"
        // beacuse we have duplicates
        counter = projetosImg.length-2
        projetosSlider.style.transform = 'translateX(' + (-size*counter) + 'px)';
    }
    if (projetosImg[counter].id === 'first-slide' ){
        projetosSlider.style.transition = "none"
        //pulando para o indice da ultima imagem
        counter = projetosImg.length - counter
        projetosSlider.style.transform = 'translateX(' + (-size*counter) + 'px)';
    }
}


