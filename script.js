const KEY = "cb6cbd73"
const btnPesquisa = document.getElementById('pesquisa')
const $TITLE_FILME= document.getElementById('title-filme');
const $MOVIE_PLOT = document.getElementById('movie-plot');
const $MOVIE_GENERO = document.getElementById('movie-genero');
const $MOVIE_ACTORES = document.getElementById('movie-actor');
const $POST = document.getElementById('post');

async function pesquisa(){
    try{
        const textoDaPesquisa = document.getElementById('movieName')
        const anoDoFilme = document.getElementById('movieYaer')
    
        let nome_filme = textoDaPesquisa.value.split(' ').join('+')
        let ano_filme = anoDoFilme.value
    
        const url = `http://www.omdbapi.com/?apikey=${KEY}&t=${nome_filme}&y=${ano_filme}`
    
        let resposta = await fetch(url);
        let data = await resposta.json();
    
        console.log(nome_filme, ano_filme, url, data)
    
        console.log(data)

        $TITLE_FILME.innerText = data.Title;
        $MOVIE_PLOT.innerText = data.Plot;
        $MOVIE_GENERO.innerText = data.Genre;
        $MOVIE_ACTORES.innerText = data.Actors;
        $POST.src = data.Poster;
    }catch(error){
        console.log(error.message)
        console.log('operação falhou')
    }
}


btnPesquisa.addEventListener('click', pesquisa)