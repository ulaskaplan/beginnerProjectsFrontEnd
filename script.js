let button = document.querySelector(".btn");
let philosopher = document.querySelector(".philosopher");
let quote = document.querySelector(".quote");

const quotes = [
    { quote: `“Whoever fights monsters should see to
      it that in the process he does not become
      a monster. And if you gaze long enough into
      an abyss, the abyss will gaze back into you.”`,
      philosopher: `Friedrich Nietzsche`

}, 

    { quote: `"Every existing thing is born without reason, prolongs
      itself out of weakness, and dies by chance."`,
      philosopher: `Jean Paul Sartre`

}, 
    
    { quote: `"We are the middle children of history, raised by
      television to believe that someday we'll be millionaires
      and movie stars and rock stars, but we won't. And we're 
      just learning this fact.”`,
      philosopher: `Tyler Durden`

},   
   
    { quote: `“The purpose of a writer is to keep civilization from 
      destroying itself.”`,
      philosopher: `Albert Camus`

},   
   
    { quote: `"Time is a flat circle. Everything we have done
      or will do we will do over and over and over again- 
      forever."`,
      philosopher: `Rustin Cohle`

},   
]   

button.addEventListener('click', () => {

    let randomNumber = Math.floor( Math.random() * quotes.length );
    
    quote.innerText = quotes[randomNumber].quote;
    philosopher.innerText = quotes[randomNumber].philosopher;
})



