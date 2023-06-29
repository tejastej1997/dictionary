

let sound = document.getElementById('sound')
let result = document.getElementById('result')
let searchword = document.getElementById('searchword')
let play = document.getElementById('play')
let noun = document.getElementById('noun')
let verb = document.getElementById('verb')
let nounh = document.getElementById('nounh')
let verbh = document.getElementById('verbh')
let verbm = document.getElementById('verb-meaning')
let nounm = document.getElementById('noun-meaning')
let wordexample = document.getElementById('word-example')
let emessage = document.getElementById('error-message')
let esection = document.getElementById('error-section')
let solution = document.getElementById('solution')
// console.log(wordexample);

let inpword = document.getElementById('inp-word');



let btn = document.getElementById('search-btn')

let dictionary = () => {

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inpword.value}`)
        .then((data) => {
            return data.json()
        })
        .then((word) => {
            console.log(word);
            console.log(typeof word);
            if (word.length >= 1) {
                // console.log(word);
                result.classList.remove('hide')
                esection.classList.add('hide')
                searchword.innerHTML = word[0].word;
                noun.innerHTML = word[0].meanings[0].partOfSpeech
                verb.innerHTML = word[0].meanings[1].partOfSpeech
                verbm.innerHTML = word[0].meanings[0].definitions[0].definition;
                nounm.innerHTML = word[0].meanings[1].definitions[0].definition;
                nounh.innerHTML = word[0].meanings[0].partOfSpeech
                verbh.innerHTML = word[0].meanings[1].partOfSpeech
                wordexample.innerHTML = word[0].meanings[0].definitions[0].example || word[0].meanings[1].definitions[0].example || "";
                let attribute = word[0].phonetics[0].audio ? word[0].phonetics[0].audio : word[0].phonetics[1].audio
                console.log(attribute);
                sound.setAttribute('src', attribute)
            }
            else {
                result.classList.add('hide')
                esection.classList.remove('hide')
                emessage.innerHTML = word.message;
                solution.innerHTML = word.resolution;

            }

        })
        .catch((err) => {
            console.log(err);

        })
}

btn.addEventListener('click', () => {
    dictionary()
})

play.addEventListener('click', () => {
    sound.play()
})

inpword.addEventListener('keydown', (e) => {
    if (e.code == 'Enter') {
        dictionary();
    }
})
