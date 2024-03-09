import { key } from "./key.js"
import { openModal, fecharMoldal, modalError, NAME_MOVIE_VALUE, YEAR_MOVIE_VALUE } from "./modal.js"


const BTN_SEARCH = document.getElementById('search');
const $Title = document.getElementById('title');
const $Description = document.getElementById('Description');
const $Year = document.getElementById('Year');
const $Actors = document.getElementById('Actors');
const $genre = document.getElementById('genre');
const $resume = document.getElementById('resume');
const $post = document.getElementById('post');
const load = document.getElementById('load');
const erro = document.getElementById('error')


const KEY = key


async function apiConsulta() {

    const NAME_MOVIE = document.getElementById('nameMovie');
    const YEAR_MOVIE = document.getElementById('yearMovie');

    let NAME_MOVIE_VALUE = NAME_MOVIE.value.split(' ').join('+');
    let YEAR_MOVIE_VALUE = YEAR_MOVIE.value;

    if (NAME_MOVIE_VALUE == '') {
        alert('digite um nome')
    } else {
        load.classList.remove('d-none')

        try {
            console.log('entrou')

            // https://www.omdbapi.com/?t=spider+man&plot=full
            const request = (await fetch(`https://www.omdbapi.com/?apikey=${KEY}&s=${NAME_MOVIE_VALUE}&y=${YEAR_MOVIE_VALUE}&plot=full`)).json();

            const data = await request;

            let num = 0
            let results = data.Search[num]
            console.log(data)

            $Title.innerText = results.Title === undefined ? "não encontramos um nome" : results.Title
            $Actors.innerText = results.Actors === undefined ? "não encontramos atores" : results.Actors
            $Description.innerText = results.Plot === undefined ? "não encontramos um resumo" : results.Plot
            $Year.innerText = results.Year === undefined ? "não encontramos um ano" : results.Year
            $genre.innerText = results.Genre === undefined ? "não encontramos um genero :(" : results.Genre
            $resume.innerText = results.Plot === undefined ? "não encontramos um resumo :(" : results.Plot
            $post.src = results.Poster === undefined ? "não encontramos uma imagem :(" : results.Poster

            openModal()
        } catch (error) {
            console.log("erro:", error)
            if (error == 'TypeError: Failed to fetch') {
                modalError()
            }
        } finally {
            load.classList.add('d-none')
        }
    }
}


BTN_SEARCH.addEventListener('click', apiConsulta)