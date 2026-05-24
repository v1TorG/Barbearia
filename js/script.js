const imagens = document.querySelectorAll('.fotos img');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;

function mostrarImagem(){

    imagens.forEach((img)=>{
        img.classList.remove('active');
    });

    imagens[index].classList.add('active');
}

next.addEventListener('click', ()=>{

    index++;

    if(index >= imagens.length){
        index = 0;
    }

    mostrarImagem();
});

prev.addEventListener('click', ()=>{

    index--;

    if(index < 0){
        index = imagens.length - 1;
    }

    mostrarImagem();
});