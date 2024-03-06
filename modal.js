const modal = document.getElementById('modal')
const btnClose = document.getElementById('btnClose')
const btnSearch = document.getElementById('pesquisa')

function closeModal(){
    modal.classList.add('close')
};

function openModal(){
    modal.classList.remove('close')

};

btnClose.addEventListener('click', closeModal)
btnSearch.addEventListener('click', openModal)
