const JANELA_MODAL = document.getElementById('modal');
const BTN_CLOSE_MODAL = document.getElementById('fechar');
const BTN_ADD_ITEM_MODAL = document.getElementById('adicionar');
const NAME_MOVIE = document.getElementById('nameMovie');
const YEAR_MOVIE = document.getElementById('yearMovie');
const erro = document.getElementById('error');
const contador = document.getElementById('contador');



const NAME_MOVIE_VALUE = NAME_MOVIE.value;
const YEAR_MOVIE_VALUE = YEAR_MOVIE.value;
function openModal(){
    JANELA_MODAL.classList.remove('d-none')
    JANELA_MODAL.classList.add('d-block')
};

function fecharMoldal(){
    JANELA_MODAL.classList.remove('d-block');
    JANELA_MODAL.classList.add('d-none')
}

function modalError(){
    let cont = 5
    erro.classList.remove('d-none')

    let timer = setInterval(()=>{
        cont--;
        contador.innerText = cont
        if (cont == 0){
            clearInterval(timer);
            erro.classList.add('d-none')
        }
    }, 1000) 
}


BTN_CLOSE_MODAL.addEventListener('click', fecharMoldal)

export {openModal, fecharMoldal, modalError, NAME_MOVIE_VALUE, YEAR_MOVIE_VALUE}