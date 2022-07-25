let tweets = [
    {
        "position": "01",
        "texto-tweet": "BRASIL! 🇧🇷👍🏻"
    },
    {
        "position": "02",
        "texto-tweet": "Obrigado pela confiança! Vamos juntos mudar o Brasil!"
    },
    {
        "position": "03",
        "texto-tweet": "O Brasil é maior do que Bolsonaro. Nossa democracia está em risco. Não iremos nos acovardar. Entre a prisão e o exílio nossa escolha é as ruas. Vai ter resistência!"
    },
    {
        "position": "04",
        "texto-tweet": "Vida longa ao Presidente eleito! Que Deus o proteja, ilumine e guie na importante missão de unir esta nação!"
    },
    {
        "position": "05",
        "texto-tweet": "1) Perdemos, é justo que fiquemos tristes e preocupados, com a gente, com os nossos, com o Brasil. Mas a tristeza tem que se transformar rapidamente em resistência."
    },
    {
        "position": "06",
        "texto-tweet": "Vai ter resistência democrática!"
    },
    {
        "position": "07",
        "texto-tweet": "Acabei de parabenizar o presidente eleito @jairbolsonaro pela vitória histórica conquistada hoje. Terminada a eleição, é hora de todos, unidos, continuarmos a trabalhar pelo Brasil."
    },
    {
        "position": "08",
        "texto-tweet": "Jair Bolsonaro é eleito o 38° Presidente da República Federativa do Brasil!"
    },
    {
        "position": "09",
        "texto-tweet": "O Brasil volta a ser uma nação, onde o Estado servirá ao povo, e não o povo ao Estado. O poder voltará a emanar efetivamente do povo. É tudo nosso!"
    },
    {
        "position": "10",
        "texto-tweet": "Parabéns ao Povo Brasileiro!!!! Povo Amado! Povo Bom! Povo capaz de fazer uma Revolução sem armas e sem sangue! O Brasil é um exemplo para o mundo!"
    },
]

let tweet = document.querySelector('div.impar')

let profileInfo = document.querySelector('div.profile-info > *')

let otherInfo = document.querySelector('div.other-info > *')

let tweetInfos = document.querySelector('.tweet-infos')

buttonTexto = document.querySelector('div.button-texto-icone > button.texto');

let texto = document.querySelector('.tweet > .texto-icone > p')

buttonIcone = document.querySelector('div.button-texto-icone > button.icone');

let icone = document.querySelector('.tweet > .texto-icone > img')

buttonTexto.addEventListener('click', mostrarTexto)

buttonIcone.addEventListener('click', mostrarIcones)

console.log(buttonTexto)

function mostrarTexto (buttonTexto) {

    icone.classList.add("none")
    texto.style.display = 'initial'

    texto.style.color = '#2b2b2b'
    profileInfo.style.color = '#2b2b2b'
    otherInfo.style.color = '#2b2b2b'
    tweetInfos.style.color = '#2b2b2b'
    tweet.classList.add('textual')

}

function mostrarIcones (buttonIcone) {

    icone.classList.remove("none")
    texto.style.display = 'none'

    texto.style.color = '#f7f7f7'
    profileInfo.style.color = '#f7f7f7'
    otherInfo.style.color = '#f7f7f7'
    tweetInfos.style.color = '#f7f7f7'
    tweet.classList.remove('textual')

    
}