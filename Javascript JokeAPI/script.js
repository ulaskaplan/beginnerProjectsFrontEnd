const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single'
const joke = document.querySelector('.joke')
const btn = document.querySelector('.btn')

let getJoke = () => {
    fetch(url)
    .then( data => data.json() )
    .then( data => {
        joke.textContent = `${data.joke}`
    })
}

btn.addEventListener('click', getJoke)
